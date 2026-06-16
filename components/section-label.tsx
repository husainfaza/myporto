export function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-[0.18em] text-muted">
        <span className="text-accent">{index}</span> — {title}
      </span>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
