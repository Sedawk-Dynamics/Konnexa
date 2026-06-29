import type { Metadata } from "next";
import { LegalPageShell } from "@/app/components/legal-page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.brand} uses cookies and similar technologies on this website.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      intro="This page explains how konnexainnovations.com uses cookies and similar technologies, and the choices you have."
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your web browser when you visit a
        website. They allow the site to remember your preferences and how you interact with it.
        We also refer to similar technologies — such as local storage, pixel tags, and SDKs — as
        &ldquo;cookies&rdquo; in this policy.
      </p>

      <h2>2. Types of cookies we use</h2>
      <h3>Strictly necessary</h3>
      <p>
        Required for the website to function — including theme preference (light / dark mode) and
        anti-flash hydration. These cannot be disabled.
      </p>
      <h3>Functional</h3>
      <p>
        Remember your choices to give you a better experience (for example, dismissed banners or
        form drafts).
      </p>
      <h3>Analytics</h3>
      <p>
        Help us understand how visitors use the site so we can improve content and performance.
        These cookies are anonymised wherever possible.
      </p>
      <h3>Marketing</h3>
      <p>
        Used to measure the effectiveness of campaigns and to show relevant content. We set
        marketing cookies only with your consent.
      </p>

      <h2>3. First-party and third-party cookies</h2>
      <p>
        Some cookies are set directly by konnexainnovations.com (first-party). Others may be set
        by service providers we use — for example, hosting (Vercel), analytics, fonts (Google
        Fonts), and embedded social content (Instagram, LinkedIn, Facebook, X). These third
        parties have their own privacy and cookie policies.
      </p>

      <h2>4. Managing your preferences</h2>
      <ul>
        <li>
          <strong>Browser controls:</strong> Most browsers let you block or delete cookies in their
          settings. Doing so may affect site functionality.
        </li>
        <li>
          <strong>Do Not Track:</strong> We honour the DNT signal where technically feasible.
        </li>
        <li>
          <strong>Withdrawal of consent:</strong> If we add a consent banner in future, you may
          change your choices at any time from the same banner or by clearing cookies.
        </li>
      </ul>

      <h2>5. Retention</h2>
      <p>
        Session cookies are removed when you close your browser. Persistent cookies remain until
        they expire or until you delete them. Most of ours expire within 12 months.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology or
        regulation. The &ldquo;Last updated&rdquo; date above will always reflect the current
        version.
      </p>

      <h2>7. Contact</h2>
      <p>
        For any questions about our cookie practices, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPageShell>
  );
}
