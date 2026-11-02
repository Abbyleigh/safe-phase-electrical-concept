import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Got a job in mind? Let's make it safe.",
  text = "Tell us what you need — from a single socket to a full rewire — and get a clear, no-pressure quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-background py-20 md:py-24">
      <Reveal className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-navy p-8 text-navy-foreground md:p-14">
          <div className="absolute inset-0 grid-lines" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-amber/20 blur-3xl"
          />
          <div className="relative grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="display-xl text-4xl md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-xl text-navy-muted">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button asChild variant="amber" size="xl">
                <Link to="/contact">
                  Request a quote <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="ghostLight" size="xl">
                <a href={`tel:${business.phones[0].tel}`}>
                  <Phone aria-hidden="true" /> {business.phones[0].display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
