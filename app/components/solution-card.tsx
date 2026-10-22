import Link from "next/link";
import type { SoftwareSolution } from "@/lib/site";
import { Icon, type IconName } from "./icons";

export function SolutionCard({ solution }: { solution: SoftwareSolution }) {
  return (
    <Link
      href={`/software-solutions/${solution.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-card-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/15"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-brand-violet text-white shadow-lg shadow-brand/25">
        <Icon name={solution.icon as IconName} className="h-7 w-7" />
      </span>
      <h3 className="relative mt-5 text-xl font-semibold text-foreground">{solution.title}</h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted">{solution.tagline}</p>
      <ul className="relative mt-5 flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-background-alt px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View details
        <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
