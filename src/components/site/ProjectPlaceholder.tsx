import { ImageOff } from "lucide-react";
import { categories, type CategoryId } from "@/lib/site";

export function ProjectPlaceholder({
  title,
  scope,
  category,
}: {
  title: string;
  scope: string;
  category: CategoryId;
}) {
  const cat = categories.find((c) => c.id === category);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-card">
      <div className="placeholder-hatch relative grid aspect-[4/3] place-items-center text-navy-muted">
        <span className="absolute left-3 top-3 rounded bg-notice px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-notice-foreground">
          Illustrative placeholder
        </span>
        <div className="flex flex-col items-center gap-2 text-center">
          <ImageOff aria-hidden="true" className="size-8" />
          <span className="eyebrow text-[0.65rem]">Real project photo would go here</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-muted-foreground">{cat?.label}</p>
        <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{scope}</p>
        <p className="mt-auto pt-5 text-xs font-semibold text-muted-foreground">
          Not a real project — layout example only.
        </p>
      </div>
    </article>
  );
}
