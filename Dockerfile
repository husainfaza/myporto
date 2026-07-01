# syntax=docker/dockerfile:1

# ---- deps: install deps for the build ----
FROM node:24-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# npm ci is preferred (reproducible); fall back to install when the lockfile
# is missing platform-specific optional deps (@emnapi wasm drift).
RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund

# ---- builder: compile the Next.js standalone bundle ----
FROM node:24-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runner: minimal image serving the standalone server ----
FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# standalone output: server.js + trimmed node_modules
# static assets and public files are NOT bundled into standalone
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/',r=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "server.js"]
