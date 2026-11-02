import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { business, CONCEPT_NOTICE, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-muted">
            A speculative redesign exploring how {business.shortName} could present its work online.
            Contact details below are reproduced from the business's public website for
            demonstration and may be out of date.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow text-amber">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-navy-muted hover:text-navy-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-amber">Listed contact details</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-muted">
            {business.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="inline-flex items-center gap-2.5 hover:text-navy-foreground">
                  <Phone aria-hidden="true" className="size-4 text-amber" /> {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2.5 break-all hover:text-navy-foreground">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-amber" /> {business.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
              <address className="not-italic">{business.address.join(", ")}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-line">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-navy-muted md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-amber">{CONCEPT_NOTICE}.</p>
          <p>
            Source of business details:{" "}
            <a href={business.sourceUrl} className="underline underline-offset-2 hover:text-navy-foreground" rel="noopener noreferrer" target="_blank">
              safephaseelec.co.uk
            </a>
            . Imagery is AI-generated for this concept.
          </p>
        </div>
      </div>
    </footer>
  );
}
