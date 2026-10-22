import Link from "next/link";
import { solutionProcess } from "@/lib/site";
import { Icon } from "./icons";
import { Reveal } from "./motion";

export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-violet/15 blur-3xl" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SolutionProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          How We Work
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          From idea to launch in four steps
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutionProcess.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-card-border bg-card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SolutionCTA({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand via-brand-violet to-brand-dark px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/85">
              Tell us what you want to build and get a free consultation and estimate from our team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link
                href="/#software-solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
                Back to services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
