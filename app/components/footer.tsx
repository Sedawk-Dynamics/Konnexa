import { navLinks, services, site, socialLinks } from "@/lib/site";
import { Logo } from "./logo";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background-alt">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex items-center dark:rounded-xl dark:bg-white dark:px-3 dark:py-2">
              <Logo className="h-24" />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}. End-to-end HR, digital marketing and skill development for
              forward-thinking businesses and students.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-brand">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {site.offices.map((office) => (
                <li key={office.label} className="flex items-start gap-2.5">
                  <Icon name="map" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      {office.label}
                    </span>
                    {office.address}
                  </span>
                </li>
              ))}
              <li>
                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2.5 hover:text-brand">
                  <Icon name="phone" className="h-4.5 w-4.5 shrink-0 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-brand">
                  <Icon name="mail" className="h-4.5 w-4.5 shrink-0 text-brand" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-card-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>GST: {site.gst}</p>
        </div>
      </div>
    </footer>
  );
}
