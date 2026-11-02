import { ArrowUpRight, Star } from "lucide-react";

const yellUrl = "https://www.yell.com/biz/safe-phase-electrical-services-ltd-stockton-on-tees-9949502/";
const googleUrl = "https://www.google.com/maps/search/?api=1&query=Safe+Phase+Electrical+Services+Ltd+Stockton-on-Tees&query_place_id=ChIJ__-002eSfkgRottGa5y2Puw";
const feedback = [
  { name: "DavidD-2067", date: "1 April 2020", summary: "Praises the prompt, friendly service and safe, professional loft-conversion electrical work." },
  { name: "TonyR-395", date: "30 March 2020", summary: "Recommends the team after smoke alarm and heating control installation, noting punctual and professional service." },
  { name: "CraigD-324", date: "30 March 2020", summary: "Highlights friendly, reliable workmanship and says he would use the company again." },
];
export function CustomerReviews() {
  return (
    <section aria-labelledby="customer-reviews-heading" className="border-y bg-secondary py-20 md:py-28">
      <div className="container-page">
        <p className="eyebrow text-muted-foreground">Independent customer feedback</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="customer-reviews-heading" className="display-xl max-w-3xl text-4xl md:text-5xl">A reputation built on real work.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">Read feedback on independent review platforms. Sources are labelled separately; the summaries below are paraphrased from published Yell reviews.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-amber">Google listing <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            <a href={yellUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-amber">All Yell reviews <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-7">
            <p className="text-sm font-semibold text-muted-foreground">Google Business Profile</p>
            <div className="mt-3 flex items-center gap-3"><span className="text-base font-semibold">Read current customer feedback on Google</span></div>
            <p className="mt-3 text-xs text-muted-foreground">The Google rating and review count are not reproduced until the exact business listing is independently confirmed.</p>
          </div>
          <div className="rounded-xl border bg-card p-7">
            <p className="text-sm font-semibold text-muted-foreground">Yell customer ratings</p>
            <div className="mt-3 flex items-center gap-3"><span className="font-display text-4xl font-extrabold">5.0</span><Star className="size-6 fill-amber text-amber" aria-hidden="true" /><span className="text-sm text-muted-foreground">7 ratings at verification</span></div>
            <p className="mt-3 text-xs text-muted-foreground">Independent listing, not Google reviews. See the source for original feedback.</p>
          </div>
        </div>
        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {feedback.map((item) => <li key={item.name} className="rounded-xl border bg-card p-7 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Yell review summary</p>
            <p className="mt-5 leading-relaxed">{item.summary}</p>
            <p className="mt-6 font-semibold">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.date} · Paraphrased, not a direct quote</p>
          </li>)}
        </ul>
        <p className="mt-5 text-xs text-muted-foreground">Unofficial redesign concept. Ratings are snapshots and must be rechecked with the business before public launch.</p>
      </div>
    </section>
  );
}
