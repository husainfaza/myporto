"use client";

import { useEffect, useState, type ReactNode } from "react";

type Step = {
  cmd: string;
  /** Optional "working" pause before output, in ms. */
  loadMs?: number;
  /** Label shown next to the spinner during the loading pause. */
  loading?: string;
  out: ReactNode;
};

// A typed command, an optional loading pause, then its output.
const SCRIPT: Step[] = [
  {
    cmd: "whoami",
    out: (
      <p className="text-muted">
        faza — full-stack developer · ships reliable products end to end
      </p>
    ),
  },
  {
    cmd: "cat stack.json",
    out: (
      <p className="text-muted">
        <span className="text-line-bright">{"{"}</span>{" "}
        <span className="text-accent">&quot;frontend&quot;</span>:{" "}
        &quot;next.js · react · typescript · tailwind&quot;,
        <br />
        &nbsp;&nbsp;<span className="text-accent">&quot;backend&quot;</span>:{" "}
        &quot;node · go · postgres · redis&quot;,
        <br />
        &nbsp;&nbsp;<span className="text-accent">&quot;infra&quot;</span>:{" "}
        &quot;aws · docker · nginx · ci/cd&quot;{" "}
        <span className="text-line-bright">{"}"}</span>
      </p>
    ),
  },
  {
    cmd: "npm ci",
    loadMs: 2100,
    loading: "resolving and linking packages",
    out: (
      <p className="text-muted">
        added <span className="text-foreground">327</span> packages · audited
        327 · <span className="text-accent">0 vulnerabilities</span> in 3.1s
      </p>
    ),
  },
  {
    cmd: "npm run build",
    loadMs: 1900,
    loading: "compiling · type-checking · bundling",
    out: (
      <p className="text-muted">
        <span className="text-accent">✓</span> compiled successfully ·{" "}
        <span className="text-foreground">0 errors</span> · 12 routes ·{" "}
        first load 84&nbsp;kB
      </p>
    ),
  },
  {
    cmd: "git log --oneline -1",
    out: (
      <p className="text-muted">
        <span className="text-accent">e83fe4f</span> feat: ship portfolio v2 ✓
      </p>
    ),
  },
  {
    cmd: "make deploy",
    loadMs: 2600,
    loading: "building image · pushing to ecr · rolling out",
    out: (
      <div className="space-y-1 text-muted">
        <p>
          <span className="text-accent">▸</span> docker build ✓ &nbsp;
          <span className="text-accent">▸</span> push ecr ✓ &nbsp;
          <span className="text-accent">▸</span> rollout ✓ (zero-downtime)
        </p>
        <p>
          live →{" "}
          <span className="text-accent">https://faza.dev</span>{" "}
          <span className="text-accent">↗</span>
        </p>
      </div>
    ),
  },
];

const TYPE_MS = 42; // per character
const SETTLE_MS = 300; // pause after a command finishes typing
const NEXT_MS = 460; // pause after output before next command
const SPIN_MS = 80; // spinner frame interval

const SPINNER = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

function Prompt() {
  return <span className="text-accent">$</span>;
}

function LoadingLine({ label }: { label: string }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setFrame((n) => (n + 1) % SPINNER.length),
      SPIN_MS,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <p className="text-muted">
      <span className="text-accent">{SPINNER[frame]}</span> {label}
      <span className="text-line-bright">…</span>
    </p>
  );
}

export function TerminalCard() {
  // step = how many steps are fully done; typed = chars typed in current cmd.
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<"typing" | "loading" | "output">("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || step >= SCRIPT.length) return;
    const entry = SCRIPT[step];

    if (phase === "typing") {
      if (typed < entry.cmd.length) {
        const t = setTimeout(() => setTyped((n) => n + 1), TYPE_MS);
        return () => clearTimeout(t);
      }
      // Command fully typed: pause, then either "work" or show output.
      const t = setTimeout(
        () => setPhase(entry.loadMs ? "loading" : "output"),
        SETTLE_MS,
      );
      return () => clearTimeout(t);
    }

    if (phase === "loading") {
      const t = setTimeout(() => setPhase("output"), entry.loadMs);
      return () => clearTimeout(t);
    }

    // phase === "output": hold, then advance to the next command.
    const t = setTimeout(() => {
      setStep((s) => s + 1);
      setTyped(0);
      setPhase("typing");
    }, NEXT_MS);
    return () => clearTimeout(t);
  }, [reduced, step, typed, phase]);

  const done = reduced || step >= SCRIPT.length;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.02]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
        <span className="ml-2 font-mono text-xs text-muted">
          faza@dev — zsh
        </span>
      </div>
      <div className="min-h-[23rem] space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
        {SCRIPT.map((entry, i) => {
          if (done || i < step) {
            return (
              <div key={i} className="space-y-2.5">
                <p>
                  <Prompt />{" "}
                  <span className="text-foreground">{entry.cmd}</span>
                </p>
                {entry.out}
              </div>
            );
          }
          if (i === step) {
            return (
              <div key={i} className="space-y-2.5">
                <p>
                  <Prompt />{" "}
                  <span className="text-foreground">
                    {entry.cmd.slice(0, typed)}
                  </span>
                  {phase === "typing" && (
                    <span
                      className="ml-px inline-block h-4 w-2 translate-y-0.5 bg-accent/80 align-middle cursor-blink"
                      aria-hidden
                    />
                  )}
                </p>
                {phase === "loading" && entry.loading && (
                  <LoadingLine label={entry.loading} />
                )}
                {phase === "output" && entry.out}
              </div>
            );
          }
          return null;
        })}

        {done && (
          <p>
            <Prompt />{" "}
            <span
              className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-accent/80"
              aria-hidden
            />
          </p>
        )}
      </div>
    </div>
  );
}
