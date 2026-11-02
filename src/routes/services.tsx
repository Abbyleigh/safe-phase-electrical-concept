import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/service-commercial.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";
import {
  categories,
  categoryBlurbs,
  categoryIds,
  filterServices,
  services,
  type CategoryId,
} from "@/lib/site";

const searchSchema = z.object({
  category: z.enum(["all", ...categoryIds] as [string, ...string[]]).optional().catch(undefined),
});

const TITLE = "Electrical Services — Domestic, Commercial, Industrial | Safe Phase (Concept)";
const DESC =
  "Explore domestic, commercial and industrial electrical services, testing & inspection, CCTV and security alarms. Unofficial design concept, not affiliated.";

export const Route = createFileRoute("/services")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { category } = Route.useSearch();
  const active = (category ?? "all") as CategoryId | "all";
  const list = filterServices(services, active);
  const activeCat = categories.find((c) => c.id === active);

  const filters: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: "All services" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Services"
        image={heroImg}
        title={
          <>
            Every circuit, <span className="text-amber">covered.</span>
          </>
        }
        intro="Domestic, commercial and industrial electrical work — plus testing, inspection and security systems. Filter by sector to find what you need."
      />

      <section aria-labelledby="filter-title" className="py-16 md:py-24">
        <div className="container-page">
          <h2 id="filter-title" className="sr-only">
            Filter services
          </h2>
          <div
            role="group"
            aria-label="Filter services by sector"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
          >
            {filters.map((f) => {
              const isActive = f.id === active;
              return (
                <Link
                  key={f.id}
                  to="/services"
                  search={f.id === "all" ? {} : { category: f.id }}
                  resetScroll={false}
                  replace
                  aria-pressed={isActive}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-navy bg-navy text-navy-foreground"
                      : "border-input bg-card hover:border-navy",
                  )}
                >
                  {isActive && <Check aria-hidden="true" className="size-4 text-amber" />}
                  {f.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr]">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              {activeCat ? (
                <div className="overflow-hidden rounded-xl border bg-card shadow-card">
                  <img
                    src={activeCat.image}
                    alt=""
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-extrabold">{activeCat.label}</h3>
                    <p className="mt-2 text-muted-foreground">{categoryBlurbs[activeCat.id]}</p>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-gradient-navy p-7 text-navy-foreground">
                  <p className="eyebrow text-amber">Full range</p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold">
                    No job too large or small.
                  </h3>
                  <p className="mt-3 text-navy-muted">
                    Choose a sector above to narrow things down, or browse everything offered.
                  </p>
                </div>
              )}
            </aside>

            <div>
              <p aria-live="polite" className="eyebrow text-muted-foreground">
                Showing {list.length} {list.length === 1 ? "service" : "services"}
                {activeCat ? ` · ${activeCat.label}` : ""}
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {list.map((s) => (
                  <li
                    key={s.id}
                    className="group flex flex-col rounded-xl border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="h-1 w-10 rounded-full bg-amber" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{s.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Sectors">
                      {s.categories.map((c) => (
                        <li
                          key={c}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {categories.find((x) => x.id === c)?.label}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      search={{ service: s.categories[0] }}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      Enquire about {s.title.toLowerCase()}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <Reveal className="container-page max-w-3xl text-center">
          <p className="eyebrow text-muted-foreground">Landlords & letting agents</p>
          <h2 className="display-xl mt-4 text-3xl md:text-4xl">
            Keeping up with legislation is hard. Compliance shouldn't be.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Periodic inspections and fixed wire testing with the landlord certificates you need — spotting
            issues before they become problems.
          </p>
        </Reveal>
      </section>

      <FaqSection id="services-faq" />
      <CtaBand />
    </>
  );
}
