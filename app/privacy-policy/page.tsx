import type { Metadata } from "next";
import { LegalPageShell } from "@/app/components/legal-page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.brand} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      intro={`This policy explains what information ${site.brand} (${site.legalName}) collects, how we use it, and the choices you have.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.legalName} (&ldquo;Konnexa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
        is a private limited company registered in Telangana, India, with offices at{" "}
        {site.offices.map((o) => o.address).join(" and ")}. GSTIN: {site.gst}. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>

      <h2>2. Information we collect</h2>
      <p>We only collect information that helps us serve you. This includes:</p>
      <ul>
        <li>
          <strong>Contact information</strong> you give us through forms (name, email, phone number,
          and message content).
        </li>
        <li>
          <strong>Recruitment / training data</strong> (CV, work history, qualifications) shared
          voluntarily when you apply for a role or enrol in a program.
        </li>
        <li>
          <strong>Business client data</strong> (company details, employee information for payroll
          and staffing) entrusted to us under a separate contract.
        </li>
        <li>
          <strong>Usage data</strong> such as IP address, browser type, pages visited, and the
          referring URL, collected automatically when you visit our website.
        </li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to enquiries you send through our contact form or email.</li>
        <li>To deliver the services you have engaged us for (HR, marketing, training, placements).</li>
        <li>To match candidates with relevant job opportunities.</li>
        <li>To improve our website, services, and user experience.</li>
        <li>To comply with applicable laws, including tax, labour, and accounting regulations.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        We process personal data under one or more of the following lawful bases under the
        Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable Indian laws:
        your consent, performance of a contract, compliance with a legal obligation, and our
        legitimate business interests.
      </p>

      <h2>5. Sharing your information</h2>
      <p>
        We do not sell your personal data. We may share it only with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> (email hosting, analytics, payroll software) bound by
          confidentiality and used solely to deliver our services.
        </li>
        <li>
          <strong>Employers or hiring partners</strong> when you have applied for a role or asked
          us to share your candidature.
        </li>
        <li>
          <strong>Government and regulatory authorities</strong> when required by Indian law.
        </li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We retain personal data only for as long as needed for the purpose it was collected or as
        required by law (for example, tax records under the Income-tax Act, 1961). When data is no
        longer required, it is securely deleted or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Withdraw consent or request erasure, subject to legal retention requirements.</li>
        <li>Lodge a grievance with our Grievance Officer or the Data Protection Board of India.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
        with the subject line &ldquo;Data Request&rdquo;. We will respond within a reasonable
        timeframe.
      </p>

      <h2>8. Data security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards — including encrypted
        transport (TLS) for our website and access controls on internal systems — to protect
        personal data. No method of transmission over the internet is 100% secure, however, and
        we cannot guarantee absolute security.
      </p>

      <h2>9. Children</h2>
      <p>
        Our services are not directed to children under 18. We do not knowingly collect personal
        data from minors without verifiable parental or guardian consent.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be highlighted on this
        page with an updated effective date. Please review periodically.
      </p>

      <h2>11. Grievance Officer</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and the DPDPA, 2023, you may
        contact our Grievance Officer for concerns related to this policy or your personal data:
      </p>
      <p>
        <strong>Name:</strong> Venkatesh G, Managing Director
        <br />
        <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        <strong>Phone:</strong> {site.phone}
      </p>
    </LegalPageShell>
  );
}
