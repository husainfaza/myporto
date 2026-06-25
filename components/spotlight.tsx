"use client";

import type { ReactNode, MouseEvent } from "react";

/**
 * Card wrapper that tracks the pointer and exposes its position as the
 * `--mx`/`--my` CSS variables, driving the `.card-spotlight` radial glow.
 */
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article onMouseMove={onMove} className={`card-spotlight ${className}`}>
      {children}
    </article>
  );
}
