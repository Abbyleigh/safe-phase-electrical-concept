import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={1280}
          height={960}
          className="absolute inset-0 -z-20 size-full object-cover opacity-60"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden="true" />
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow animate-hero-in text-amber">{eyebrow}</p>
        <h1 className="display-xl animate-hero-in mt-5 max-w-4xl text-5xl [animation-delay:80ms] md:text-7xl">
          {title}
        </h1>
        <p className="animate-hero-in mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted [animation-delay:160ms]">
          {intro}
        </p>
        {children && <div className="animate-hero-in mt-8 [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
