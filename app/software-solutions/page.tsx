import type { Metadata } from "next";
import { softwareSolutions } from "@/lib/site";
import { SolutionCard } from "@/app/components/solution-card";
import {
  Breadcrumbs,
  PageBackdrop,
  SolutionCTA,
  SolutionProcess,
} from "@/app/components/solution-sections";

export const metadata: Metadata = {
  title: "Software Solutions",
  description:
    "Custom software, websites, mobile apps, e-commerce, HRMS & payroll and ERP/CRM solutions built by Konnexa Innovations in Hyderabad.",
  alternates: { canonical: "/software-solutions" },
};

export default function SoftwareSolutionsPage() {
  return (
    <div className="relative">
      <PageBackdrop />

      <header className="mx-auto max-w-3xl px-5 pb-12 pt-32 text-center sm:px-8 sm:pt-40">
        <div className="flex justify-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: "Software Solutions" },
            ]}
          />
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Software Solutions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          From your first website to a full ERP, we design, build and support software that helps
          your business run smoother and grow faster.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareSolutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </section>

      <SolutionProcess />
      <SolutionCTA title="Have a software idea?" />
    </div>
  );
}
