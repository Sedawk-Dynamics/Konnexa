import Link from "next/link";
import { Icon } from "./icons";
import { legalEffectiveDate } from "@/lib/site";

export function LegalPageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-violet/15 blur-3xl" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-32 sm:px-8 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-foreground">{title}</li>
          </ol>
        </nav>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-medium text-muted">
          <Icon name="clock" className="h-4 w-4" />
          Last updated · {legalEffectiveDate}
        </p>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="legal-prose text-base leading-relaxed text-foreground/90">
          {children}
        </div>

        <div className="mt-12 rounded-2xl border border-card-border bg-background-alt p-6 text-sm text-muted">
          <p>
            Questions about this policy? Email us at{" "}
            <a
              href="mailto:info@konnexainnovations.com"
              className="font-medium text-brand hover:underline"
            >
              info@konnexainnovations.com
            </a>{" "}
            or reach out via the{" "}
            <Link href="/#contact" className="font-medium text-brand hover:underline">
              contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
