import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { softwareSolutions, technologies } from "@/lib/site";
import { Icon, type IconName } from "@/app/components/icons";
import { Reveal } from "@/app/components/motion";
import { SolutionCard } from "@/app/components/solution-card";
import {
  Breadcrumbs,
  PageBackdrop,
  SolutionCTA,
  SolutionProcess,
} from "@/app/components/solution-sections";

type Props = { params: Promise<{ slug: string }> };

// Only the solutions defined in lib/site.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return softwareSolutions.map((s) => ({ slug: s.slug }));
}

function getSolution(slug: string) {
  return softwareSolutions.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.tagline,
    alternates: { canonical: `/software-solutions/${solution.slug}` },
  };
}

export default async function SoftwareSolutionPage({ params }: Props) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();

  const others = softwareSolutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <div className="relative">
      <PageBackdrop />

      {/* Hero */}
      <header className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Software Solutions", href: "/software-solutions" },
            { label: solution.title },
          ]}
        />
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-brand-violet text-white shadow-lg shadow-brand/30">
              <Icon name={solution.icon as IconName} className="h-8 w-8" />
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-brand">{solution.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{solution.overview}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get a Free Quote
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link
                href="/#software-solutions"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
                All solutions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-linear-to-br from-brand via-brand to-brand-violet p-8 text-white shadow-xl shadow-brand/30">
            <h2 className="text-lg font-semibold">Why choose Konnexa</h2>
            <ul className="mt-5 space-y-3.5">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-white/95">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </header>

      {/* Features */}
      <section className="bg-background-alt py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              What&apos;s Included
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key features
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {solution.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-3xl border border-card-border bg-card p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Technologies we use
            </h3>
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-card-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <SolutionProcess />

      {/* Other solutions */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore other solutions
          </h2>
          <Link
            href="/software-solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            View all
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <SolutionCard key={s.slug} solution={s} />
          ))}
        </div>
      </section>

      <SolutionCTA title={`Ready to start your ${solution.title} project?`} />
    </div>
  );
}
