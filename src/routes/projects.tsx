import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Check } from "lucide-react";
import heroImg from "@/assets/service-domestic.jpg";
import { PageHero } from "@/components/site/PageHero";
import { ProjectPlaceholder } from "@/components/site/ProjectPlaceholder";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";
import { categories, placeholderProjects, type CategoryId } from "@/lib/site";

const TITLE = "Projects — Case Study Layout | Safe Phase Electrical (Concept)";
const DESC =
  "Illustrative placeholder layout showing how real electrical project case studies could be presented. No real projects shown. Unofficial concept, not affiliated.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const list = active === "all" ? placeholderProjects : placeholderProjects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        image={heroImg}
        title={
          <>
            Show the work. <span className="text-amber">Win the next job.</span>
          </>
        }
        intro="A gallery layout ready for genuine case studies — photos, scope and outcomes. Everything below is an illustrative placeholder."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div
            role="note"
            className="flex items-start gap-3 rounded-xl border-2 border-notice bg-card p-5"
          >
            <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-foreground" />
            <p className="text-sm">
              <strong>Illustrative placeholders only.</strong> None of these represent real jobs carried
              out by {""}Safe Phase Electrical. They demonstrate how real projects could be displayed once
              supplied by the business.
            </p>
          </div>

          <div role="group" aria-label="Filter placeholders by sector" className="mt-10 flex flex-wrap gap-2">
            {[{ id: "all" as const, label: "All" }, ...categories].map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                    isActive ? "border-navy bg-navy text-navy-foreground" : "border-input bg-card hover:border-navy",
                  )}
                >
                  {isActive && <Check aria-hidden="true" className="size-4 text-amber" />}
                  {c.label}
                </button>
              );
            })}
          </div>

          <p aria-live="polite" className="eyebrow mt-8 text-muted-foreground">
            {list.length} placeholder{list.length === 1 ? "" : "s"}
          </p>
          {list.length > 0 ? (
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <li key={p.id}>
                  <ProjectPlaceholder {...p} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-muted-foreground">No placeholders in this sector yet.</p>
          )}
        </div>
      </section>

      <CtaBand title="Have a project like these?" />
    </>
  );
}
