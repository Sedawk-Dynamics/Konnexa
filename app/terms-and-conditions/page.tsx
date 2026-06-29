import type { Metadata } from "next";
import { LegalPageShell } from "@/app/components/legal-page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern your use of the ${site.brand} website and services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      intro={`These terms govern your use of the ${site.brand} website (konnexainnovations.com) and any services we provide. By using the site or engaging us, you agree to these terms.`}
    >
      <h2>1. About us</h2>
      <p>
        The website is operated by {site.legalName} (&ldquo;Konnexa&rdquo;, &ldquo;we&rdquo;,
        &ldquo;our&rdquo;), a private limited company registered in Telangana, India. GSTIN:{" "}
        {site.gst}. Contact: <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phone}.
      </p>

      <h2>2. Acceptance of terms</h2>
      <p>
        By accessing or using the site, you confirm that you are at least 18 years old (or have
        permission from a parent/guardian) and that you accept these terms in full. If you do not
        agree, please discontinue use of the site.
      </p>

      <h2>3. Services</h2>
      <p>We provide the following services:</p>
      <ul>
        <li>HR services, recruitment, staffing, and payroll management.</li>
        <li>End-to-end digital marketing.</li>
        <li>Software training and skill development programs, with placement assistance.</li>
      </ul>
      <p>
        Specific terms, deliverables, fees, and timelines for each engagement are agreed in a
        separate written agreement, work order, or invoice. In case of conflict, the engagement
        document prevails over these general terms.
      </p>

      <h2>4. Use of the website</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for any unlawful, harmful, or fraudulent purpose.</li>
        <li>Attempt to gain unauthorised access to our systems or interfere with site operation.</li>
        <li>Copy, reproduce, or republish content without our prior written permission.</li>
        <li>Submit false, misleading, or third-party personal information without proper consent.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, the Konnexa logo, layout, and
        code — is owned by {site.legalName} or its licensors and is protected by Indian and
        international copyright and trademark laws. You may view and print pages for personal,
        non-commercial use only.
      </p>

      <h2>6. Submissions and applications</h2>
      <p>
        Any information you submit via forms, including job or program applications, must be
        accurate and your own. By submitting, you grant us permission to process the data for the
        purpose described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>7. Fees and payment</h2>
      <p>
        Fees for our services are set out in the relevant engagement document. Unless otherwise
        agreed in writing, invoices are payable within fifteen (15) days of issue. We reserve the
        right to suspend services for non-payment.
      </p>

      <h2>8. Refunds</h2>
      <p>
        Refunds for training and program fees, where applicable, follow the refund schedule of the
        specific program. No refunds are offered after the cooling-off window described in the
        program brochure.
      </p>

      <h2>9. Disclaimer</h2>
      <p>
        The website and our services are provided on an &ldquo;as is&rdquo; basis. We make no
        warranty that the site will be uninterrupted or error-free, and we are not liable for
        information available on third-party sites linked from this site.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any claim arising out of
        or related to the use of this website or our services is limited to the fees paid by you
        in the three (3) months preceding the event giving rise to the claim. We are not liable
        for indirect, incidental, or consequential damages.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You agree to indemnify Konnexa from any claim, loss, or expense arising from your breach
        of these terms or your misuse of the website.
      </p>

      <h2>12. Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of India. The courts of Hyderabad, Telangana shall
        have exclusive jurisdiction over any dispute arising under these terms, subject to any
        applicable arbitration clause in a separate engagement agreement.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may revise these terms from time to time. Updated terms become effective when posted
        on this page. Continued use of the site after that constitutes acceptance.
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions about these terms, write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPageShell>
  );
}
