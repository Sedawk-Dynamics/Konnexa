"use client";

import { motion } from "framer-motion";
import { useActionState, useEffect, useRef } from "react";
import { site, socialLinks } from "@/lib/site";
import { Reveal } from "../motion";
import { Icon, type IconName } from "../icons";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/send-contact";

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Call us", value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: "mail", label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "clock", label: "Working hours", value: site.workingHours },
];

const initialState: ContactFormState = { status: "idle", message: "" };

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  // Clear the form once a message has been sent successfully.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status, state.message]);

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info side */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build your digital success
              </h2>
              <p className="mt-4 max-w-md text-base text-muted">
                Tell us about your hiring, marketing or training needs and our team will get back
                to you shortly.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon name={d.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="text-base font-medium text-foreground hover:text-brand">
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              {site.offices.map((office, i) => (
                <Reveal key={office.label} delay={(details.length + i) * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon name="map" className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {office.label}
                      </p>
                      <p className="text-base font-medium leading-relaxed text-foreground">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </Reveal>
          </div>

          {/* Form side */}
          <motion.form
            ref={formRef}
            action={formAction}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-card-border bg-card p-7 shadow-lg sm:p-9"
          >
            <div className="grid gap-5">
              <Field label="Full name">
                <input
                  required
                  name="name"
                  defaultValue={state.values?.name}
                  placeholder="Your name"
                  autoComplete="name"
                  className="form-input"
                  disabled={isPending}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    defaultValue={state.values?.email}
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="form-input"
                    disabled={isPending}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    name="phone"
                    defaultValue={state.values?.phone}
                    placeholder="+91 ..."
                    autoComplete="tel"
                    className="form-input"
                    disabled={isPending}
                  />
                </Field>
              </div>
              <Field label="How can we help?">
                <textarea
                  required
                  name="message"
                  rows={4}
                  defaultValue={state.values?.message}
                  placeholder="Tell us about your requirement..."
                  className="form-input resize-none"
                  disabled={isPending}
                />
              </Field>

              {/* Honeypot — kept off-screen, ignored by real users, filled by bots */}
              <div aria-hidden="true" className="hidden">
                <label>
                  Company URL
                  <input
                    type="text"
                    name="company_url"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {state.status !== "idle" && (
                <p
                  role={state.status === "error" ? "alert" : "status"}
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    state.status === "success"
                      ? "border-green-300/40 bg-green-100/30 text-green-800 dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-200"
                      : "border-red-300/40 bg-red-100/30 text-red-800 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200"
                  }`}
                >
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isPending ? (
                  <>
                    <Spinner />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
