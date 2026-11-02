import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqSection } from "@/components/site/FaqSection";
import { CustomerReviews } from "@/components/site/CustomerReviews";
import { ProjectPlaceholder } from "@/components/site/ProjectPlaceholder";
import { business, categories, categoryBlurbs, placeholderProjects } from "@/lib/site";

const TITLE = "Safe Phase Electrical — Electricians in the North East (Unofficial Concept)";
const DESC =
  "Concept redesign for a family-run electrical contractor in Stockton-on-Tees: domestic, commercial and industrial work, testing & inspection, CCTV and security. Not affiliated.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stated = [
  {
    icon: BadgeCheck,
    title: "Part P registered",
    text: "The website states Part P registration with NAPIT.",
  },
  {
    icon: FileCheck2,
    title: "Certification included",
    text: "Relevant certification is said to be included in the price of every job.",
  },
  {
    icon: ShieldCheck,
    title: "12-month guarantee",
    text: "Parts and labour are described as carrying a full 12-month guarantee.",
  },
];

const steps = [
  { icon: MessageSquare, title: "Tell us the job", text: "Call or send an enquiry with a few details and photos if you have them." },
  { icon: ClipboardCheck, title: "Clear quote", text: "We'll talk through the work, the options and the price — no jargon." },
  { icon: Wrench, title: "Done right, first time", text: "Tidy, considerate work carried out to current wiring regulations." },
  { icon: FileCheck2, title: "Certified & handed over", text: "You get the paperwork insurers, tenants and buyers may ask for." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <img
          src={heroImg}
          alt="An electrician carefully wiring a consumer unit under warm work-lamp light"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 grid-lines opacity-60" aria-hidden="true" />

        <div className="container-page flex min-h-[calc(100svh-7rem)] flex-col justify-center py-20 md:py-28">
          <p className="eyebrow animate-hero-in flex items-center gap-3 text-amber">
            <span className="animate-pulse-line inline-block h-px w-10 bg-amber" aria-hidden="true" />
            North East electrical contractor
          </p>
          <h1 className="display-xl animate-hero-in mt-6 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] [animation-delay:80ms]">
            Power,
            <br />
            done <span className="text-amber">properly.</span>
          </h1>
          <p className="animate-hero-in mt-7 max-w-xl text-lg leading-relaxed text-navy-muted md:text-xl [animation-delay:160ms]">
            Safe, certified electrical work for homes, businesses and industry — from an extra socket
            to a full rewire, testing and CCTV.
          </p>
          <div className="animate-hero-in mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <Button asChild variant="amber" size="xl">
              <Link to="/contact">
                Request a quote <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghostLight" size="xl">
              <a href={`tel:${business.phones[0].tel}`}>
                <Phone aria-hidden="true" /> Call {business.phones[0].display}
              </a>
            </Button>
          </div>

          <dl className="animate-hero-in mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-navy-line bg-navy-line sm:grid-cols-3 [animation-delay:320ms]">
            {[
              { k: "Family-run", v: "Since 2019" },
              { k: "Based in", v: "Stockton-on-Tees" },
              { k: "Covering", v: "The North East" },
            ].map((s) => (
              <div key={s.k} className="bg-navy-deep/80 px-5 py-4 backdrop-blur">
                <dt className="eyebrow text-[0.65rem] text-navy-muted">{s.k}</dt>
                <dd className="mt-1 font-display text-lg font-bold">{s.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-navy-muted">
            Details as described on the business's own website.
          </p>
        </div>
      </section>

      {/* SECTORS */}
      <section aria-labelledby="sectors-title" className="py-20 md:py-28">
        <div className="container-page">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-muted-foreground">What we cover</p>
              <h2 id="sectors-title" className="display-xl mt-4 max-w-2xl text-4xl md:text-6xl">
                One team. Every kind of installation.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
            >
              All services <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>

          <ul className="mt-12 grid gap-4 md:grid-cols-6">
            {categories.map((c, i) => (
              <Reveal
                as="li"
                key={c.id}
                delay={i * 70}
                className={i < 2 ? "md:col-span-3" : "md:col-span-2"}
              >
                <Link
                  to="/services"
                  search={{ category: c.id }}
                  className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl bg-navy-deep p-6 text-navy-foreground md:aspect-auto md:h-full md:min-h-80"
                >
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent"
                  />
                  <span className="eyebrow text-amber">0{i + 1}</span>
                  <span className="mt-2 flex items-center justify-between gap-4">
                    <span className="font-display text-2xl font-extrabold md:text-3xl">{c.label}</span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-navy-line transition-colors group-hover:border-amber group-hover:bg-amber group-hover:text-amber-foreground">
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </span>
                  </span>
                  <span className="mt-2 max-w-sm text-sm text-navy-muted">{categoryBlurbs[c.id]}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SAFETY MESSAGE */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 grid-lines" aria-hidden="true" />
        <div className="container-page relative grid gap-14 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-amber">Why it matters</p>
            <h2 className="display-xl mt-4 text-4xl md:text-6xl">
              If they can't certify it, <span className="text-amber">ask why.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lg leading-relaxed text-navy-muted">
            <p>
              Electrical work that looks fine can still leave a home or workplace unsafe. Before anyone
              starts, check they can work safely to legally required standards, follow current health
              and safety regulations, and issue the certificates that prove compliance.
            </p>
            <p>
              Those certificates matter later, too — tenants, insurers and solicitors may ask for them
              when you rent or sell. Doing the job right first time is simply the safest, cheapest way.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-3">
              {["Work to standard", "Current regulations", "Proper certificates"].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-lg border border-navy-line px-4 py-3 text-sm font-semibold text-navy-foreground"
                >
                  <BadgeCheck aria-hidden="true" className="size-4 text-amber" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STATED ON SOURCE */}
      <section aria-labelledby="stated-title" className="py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Peace of mind</p>
            <h2 id="stated-title" className="display-xl mt-4 text-4xl md:text-5xl">
              Backed by paperwork, not promises.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stated.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-xl border bg-card p-7 shadow-card transition-shadow hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-lg bg-amber text-amber-foreground">
                    <s.icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            These points are reproduced from{" "}
            <a href={business.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              safephaseelec.co.uk
            </a>{" "}
            and have not been independently verified for this concept.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="process-title" className="border-y bg-secondary py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">How it works</p>
            <h2 id="process-title" className="display-xl mt-4 text-4xl md:text-5xl">
              Simple from first call to final certificate.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-extrabold text-amber">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                  <s.icon aria-hidden="true" className="size-6 text-muted-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <section aria-labelledby="projects-title" className="py-20 md:py-28">
        <div className="container-page">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-muted-foreground">Projects</p>
              <h2 id="projects-title" className="display-xl mt-4 max-w-2xl text-4xl md:text-5xl">
                Where real work would shine.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                These are clearly-marked placeholders showing how genuine project case studies could be
                presented. No real jobs are depicted.
              </p>
            </div>
            <Button asChild variant="navy" size="lg">
              <Link to="/projects">
                See the layout <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {placeholderProjects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProjectPlaceholder {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AREA */}
      <section className="pb-4">
        <Reveal className="container-page">
          <div className="flex flex-col items-start gap-4 rounded-xl border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <MapPin aria-hidden="true" className="mt-1 size-6 shrink-0 text-amber" />
              <div>
                <h2 className="font-display text-xl font-bold">Based in {business.baseAreas}</h2>
                <p className="text-muted-foreground">
                  Working across the North East — Stockton, Middlesbrough, Durham, Newcastle and beyond.
                </p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">
              About the business <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CustomerReviews />
      <FaqSection id="home-faq" />
      <CtaBand />
    </>
  );
}
