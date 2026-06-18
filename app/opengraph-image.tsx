import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Token values mirror app/globals.css (:root). ImageResponse can't read CSS vars,
// so keep these in sync if the palette changes.
const bg = "#0a0a0b";
const surface = "#111113";
const foreground = "#f2f0ea";
const muted = "#8a8a93";
const accent = "#d7ff6e";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: accent, fontSize: 30, letterSpacing: 6 }}>
            {site.role.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: foreground,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {site.name} builds <span style={{ color: accent }}>reliable</span>
          </span>
          <span
            style={{
              color: foreground,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            products end to end.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${surface}`,
            paddingTop: "32px",
          }}
        >
          <span style={{ color: muted, fontSize: 28 }}>
            TypeScript · Go · PostgreSQL · AWS
          </span>
          <span style={{ color: muted, fontSize: 28 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
