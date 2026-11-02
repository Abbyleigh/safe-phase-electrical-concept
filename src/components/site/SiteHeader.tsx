import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Info } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { business, CONCEPT_NOTICE, navLinks } from "@/lib/site";

export function ConceptNotice() {
  return (
    <div role="note" aria-label="Site notice" className="bg-notice text-notice-foreground">
      <p className="container-page flex items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
        <Info aria-hidden="true" className="size-4 shrink-0" />
        <span>{CONCEPT_NOTICE}. Demo only.</span>
      </p>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const primaryPhone = business.phones[0];

  return (
    <header className="sticky top-0 z-50">
      <ConceptNotice />
      <div className="border-b border-navy-line bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/85">
        <nav aria-label="Main" className="container-page flex h-18 items-center justify-between gap-6">
          <Link to="/" aria-label="Safe Phase Electrical concept — home" className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="relative rounded-md px-4 py-2 text-sm font-medium text-navy-muted transition-colors hover:text-navy-foreground data-[status=active]:text-navy-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-4 data-[status=active]:after:-bottom-[1.15rem] data-[status=active]:after:h-0.5 data-[status=active]:after:bg-amber"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${primaryPhone.tel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-foreground hover:text-amber"
            >
              <Phone aria-hidden="true" className="size-4 text-amber" />
              {primaryPhone.display}
            </a>
            <Button asChild variant="amber">
              <Link to="/contact">Get a quote</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-md text-navy-foreground hover:bg-navy-soft lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm border-navy-line bg-navy-deep p-0 text-navy-foreground [&>button]:hidden"
            >
              <div className="flex h-18 items-center justify-between border-b border-navy-line px-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
                <SheetClose asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="grid size-11 place-items-center rounded-md hover:bg-navy-soft"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </SheetClose>
              </div>
              <ul className="flex flex-col p-3">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-md px-4 py-4 font-display text-2xl font-bold text-navy-muted hover:bg-navy-soft hover:text-navy-foreground data-[status=active]:text-amber"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 border-t border-navy-line p-5">
                {business.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-3 rounded-md border border-navy-line px-4 py-3 font-semibold hover:border-amber"
                  >
                    <Phone aria-hidden="true" className="size-4 text-amber" /> {p.display}
                  </a>
                ))}
                <Button asChild variant="amber" size="xl" className="w-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Get a quote
                  </Link>
                </Button>
                <p className="text-xs text-navy-muted">
                  Numbers as listed on {business.sourceUrl.replace("https://", "")}. Concept only.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
