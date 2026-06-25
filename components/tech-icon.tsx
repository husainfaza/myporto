import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiRedis,
  SiDrizzle,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";

// Keyed by the exact item string in lib/data.ts → stack[].items.
const icons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Node.js": SiNodedotjs,
  Go: SiGo,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  "Drizzle ORM": SiDrizzle,
  "REST / gRPC": TbApi,
  Docker: SiDocker,
  "AWS (EC2 · S3 · RDS)": FaAws,
  Nginx: SiNginx,
  "GitHub Actions": SiGithubactions,
  Linux: SiLinux,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name];
  if (!Icon) {
    // Fallback dash for any item without a mapped logo.
    return (
      <span className={className} aria-hidden>
        —
      </span>
    );
  }
  return <Icon className={className} aria-hidden />;
}
