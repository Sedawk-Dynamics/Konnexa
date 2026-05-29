"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "../motion";
import { Icon, type IconName } from "../icons";

const details: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Call us", value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: "mail", label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "map", label: "Visit us", value: site.address },
  { icon: "clock", label: "Working hours", value: site.workingHours },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

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
            </div>

            <Reveal delay={0.3} className="mt-8 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
            </Reveal>
          </div>

          {/* Form side */}
          <motion.form
            onSubmit={handleSubmit}
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
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 ..."
                    className="form-input"
                  />
                </Field>
              </div>
              <Field label="How can we help?">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your requirement..."
                  className="form-input resize-none"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
                <Icon name="arrowRight" className="h-4 w-4" />
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
