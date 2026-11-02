import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Handshake, HeartHandshake, MapPin, Target } from "lucide-react";
import toolsImg from "@/assets/about-tools.jpg";
import industrialImg from "@/assets/service-industrial.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { business } from "@/lib/site";

const TITLE = "About — Family-Run Electricians, Stockton-on-Tees | Safe Phase (Concept)";
const DESC =
  "The story of a family-run electrical business founded in Stockton-on-Tees in 2019, as told on its own website. Unofficial design concept, not affiliated.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Right first time", text: "A strong emphasis on doing the job correctly the first time round." },
  { icon: HeartHandshake, title: "Customers first", text: "Customer satisfaction described as the number one priority." },
  { icon: Handshake, title: "Trusted by trade", text: "Sub-contract work for other electrical companies, with their reputation on the line." },
  { icon: CheckCircle2, title: "Quality people", text: "An aim to employ the highest quality staff for every job." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        image={industrialImg}
        title={
          <>
            Family-run. <span className="text-amber">Built on recommendation.</span>
          </>
        }
        intro={`A ${business.baseAreas.split(" and ")[0]} electrical business that, by its own account, grew from two people to a team through word of mouth.`}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={toolsImg}
              alt="An electrician's insulated tools and cable reels laid out on a navy workbench"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-muted-foreground">The story</p>
            <h2 className="display-xl mt-4 text-4xl md:text-5xl">From two people to a growing team.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                According to its website, the company was started in {business.founded} by a husband and
                wife in Stockton-on-Tees, and began taking on staff within the first month — growth they
                put down to recommendations from customers, friends, family and previous employers.
              </p>
              <p>
                Today it describes working across domestic, commercial and industrial installations, and
                taking on contracts from other electrical companies that can't complete a job themselves.
                Complex or large jobs, it says, are nothing new.
              </p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Summarised from{" "}
              <a href={business.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                safephaseelec.co.uk
              </a>
              . Not independently verified.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-navy py-20 text-navy-foreground md:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amber">What drives the work</p>
            <h2 id="values-title" className="display-xl mt-4 text-4xl md:text-5xl">
              Principles over shortcuts.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-navy-line bg-navy-line md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 70} className="bg-navy p-7">
                <v.icon aria-hidden="true" className="size-7 text-amber" />
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-navy-muted">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <Reveal className="container-page grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-amber text-amber-foreground">
            <MapPin aria-hidden="true" className="size-8" />
          </span>
          <div>
            <h2 className="display-xl text-3xl md:text-4xl">Rooted in Teesside. Working across the North East.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Located in {business.baseAreas}, with work completed anywhere in the North East of England —
              and projects further afield considered when required.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Let's talk about your project." />
    </>
  );
}
