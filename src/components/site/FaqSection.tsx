import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FaqSection({ id = "faq" }: { id?: string }) {
  return (
    <section aria-labelledby={`${id}-title`} className="bg-secondary py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow text-muted-foreground">FAQ</p>
          <h2 id={`${id}-title`} className="display-xl mt-4 text-4xl md:text-5xl">
            Straight answers.
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Common questions about electrical work, inspections and this concept site.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="rounded-xl border bg-card px-6 shadow-card">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="last:border-b-0">
                <AccordionTrigger className="py-5 text-left font-display text-lg font-bold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
