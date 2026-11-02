import { cn } from "@/lib/utils";

/** Concept wordmark created for this demo — not the business's own logo. */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-md bg-amber text-amber-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M13.5 2 4 13.5h6.5L9 22l10-12.5h-6.6L13.5 2Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold uppercase tracking-tight",
            tone === "light" ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Safe Phase
        </span>
        <span
          className={cn(
            "eyebrow mt-1 text-[0.6rem]",
            tone === "light" ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          Electrical · Concept
        </span>
      </span>
    </span>
  );
}
