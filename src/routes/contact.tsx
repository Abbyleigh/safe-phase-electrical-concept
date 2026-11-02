import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Info, Mail, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/service-testing.jpg";
import { PageHero } from "@/components/site/PageHero";
import { FaqSection } from "@/components/site/FaqSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { enquirySchema, type EnquiryValues } from "@/lib/enquiry";
import { business, categories, categoryIds } from "@/lib/site";

const TITLE = "Contact & Quote Request | Safe Phase Electrical (Unofficial Concept)";
const DESC =
  "Demo enquiry form and publicly listed contact details for a Stockton-on-Tees electrical contractor. Unofficial concept — the form sends no data.";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({
    service: z.enum(categoryIds as [string, ...string[]]).optional().catch(undefined),
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  const [submitted, setSubmitted] = useState<EnquiryValues | null>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      postcode: "",
      service: (service ?? "") as EnquiryValues["service"],
      message: "",
      consent: false as unknown as true,
    },
  });

  function onSubmit(values: EnquiryValues) {
    // DEMO ONLY: nothing is sent or stored. Show a local confirmation.
    setSubmitted(values);
    requestAnimationFrame(() => confirmRef.current?.focus());
  }

  function reset() {
    setSubmitted(null);
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        image={heroImg}
        title={
          <>
            Let's get you <span className="text-amber">switched on.</span>
          </>
        }
        intro="Describe the job and we'll take it from there. On this concept site the form is a demonstration — nothing you enter leaves your browser."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border bg-card p-6 shadow-card md:p-10">
            <div role="note" className="mb-8 flex items-start gap-3 rounded-lg bg-notice p-4 text-notice-foreground">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              <p className="text-sm font-medium">
                <strong>Demo-only form.</strong> Submitting shows a confirmation on this page only. No data
                is sent to Safe Phase Electrical or anyone else.
              </p>
            </div>

            {submitted ? (
              <div
                ref={confirmRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="rounded-xl border-2 border-success p-8 text-center outline-none"
              >
                <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-success" />
                <h2 className="display-xl mt-4 text-3xl">Thanks, {submitted.name.split(" ")[0]}.</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Your demo enquiry about{" "}
                  <strong className="text-foreground">
                    {categories.find((c) => c.id === submitted.service)?.label.toLowerCase()}
                  </strong>{" "}
                  passed validation. In a live site this is where it would be sent — here, nothing was
                  transmitted or saved.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button variant="navy" size="lg" onClick={reset}>
                    Start another enquiry
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">Browse services</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <h2 className="font-display text-2xl font-extrabold">Request a quote</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name *</FormLabel>
                          <FormControl>
                            <Input autoComplete="name" className="h-11" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" autoComplete="email" className="h-11" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" autoComplete="tel" className="h-11" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode (optional)</FormLabel>
                          <FormControl>
                            <Input autoComplete="postal-code" className="h-11 uppercase" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of work *</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-11 w-full rounded-md border border-input bg-card px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
                          >
                            <option value="" disabled>
                              Select a sector…
                            </option>
                            {categories.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about the job *</FormLabel>
                        <FormControl>
                          <Textarea rows={6} maxLength={1000} {...field} />
                        </FormControl>
                        <FormDescription>
                          {field.value.length}/1000 — what needs doing, where, and any timescales.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-start gap-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value === true}
                              onCheckedChange={(v) => field.onChange(v === true)}
                              onBlur={field.onBlur}
                              className="mt-0.5 size-5"
                            />
                          </FormControl>
                          <FormLabel className="font-normal leading-snug">
                            I understand this is an unofficial demo and my enquiry will not be sent. *
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="amber" size="xl" className="w-full sm:w-auto">
                    Send demo enquiry
                  </Button>
                </form>
              </Form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-navy p-7 text-navy-foreground">
              <p className="eyebrow text-amber">Listed contact details</p>
              <ul className="mt-5 space-y-4">
                {business.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-3 text-lg font-bold hover:text-amber">
                      <Phone aria-hidden="true" className="size-5 text-amber" /> {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all hover:text-amber">
                    <Mail aria-hidden="true" className="size-5 shrink-0 text-amber" /> {business.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber" />
                  <address className="not-italic text-navy-muted">
                    {business.address.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </li>
              </ul>
              <p className="mt-6 border-t border-navy-line pt-4 text-xs text-navy-muted">
                Reproduced from the business's public website (footer dated 2020) and may be out of date.
                This concept is not affiliated with the business.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-7">
              <h2 className="font-display text-lg font-bold">Coverage</h2>
              <p className="mt-2 text-muted-foreground">
                Based in {business.baseAreas}. {business.coverage}, with projects further afield
                considered.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection id="contact-faq" />
    </>
  );
}
