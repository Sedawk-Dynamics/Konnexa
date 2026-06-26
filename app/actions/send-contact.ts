"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  // Echo back so the user doesn't lose what they typed if validation fails
  values?: { name: string; email: string; phone: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill hidden fields; real users don't.
  const honeypot = String(formData.get("company_url") ?? "").trim();

  const values = { name, email, phone, message };

  if (honeypot) {
    // Pretend success so bots don't probe further.
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  if (!name || name.length < 2) {
    return { status: "error", message: "Please enter your name.", values };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", values };
  }
  if (!message || message.length < 10) {
    return {
      status: "error",
      message: "Please give us a little more detail (at least 10 characters).",
      values,
    };
  }

  try {
    const host = required("SMTP_HOST");
    const port = Number(required("SMTP_PORT"));
    const user = required("SMTP_USER");
    const pass = required("SMTP_PASS");
    const from = process.env.FROM_EMAIL || user;
    const to = process.env.TO_EMAIL || site.email;

    const transporter = nodemailer.createTransport({
      host,
      port,
      // Implicit TLS on 465; STARTTLS on 587/25
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New website enquiry from ${name}`;
    const text = [
      `New enquiry via konnexainnovations.com`,
      ``,
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Phone:   ${phone || "(not provided)"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#1c2033;line-height:1.55">
        <h2 style="color:#4f46e5;margin:0 0 16px">New website enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
          <tr><td><b>Name</b></td><td>${escape(name)}</td></tr>
          <tr><td><b>Email</b></td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          <tr><td><b>Phone</b></td><td>${escape(phone) || "<i>not provided</i>"}</td></tr>
        </table>
        <h3 style="margin:20px 0 6px">Message</h3>
        <p style="white-space:pre-wrap;font-size:14px">${escape(message)}</p>
        <hr style="border:0;border-top:1px solid #e8e8f6;margin:20px 0"/>
        <p style="font-size:12px;color:#6b7192">Sent from konnexainnovations.com contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Konnexa Website" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });

    return {
      status: "success",
      message: "Thanks! Your message is on its way — we'll be in touch shortly.",
    };
  } catch (err) {
    console.error("[contact-form] send failed:", err);
    return {
      status: "error",
      message:
        "Sorry, we couldn't send your message right now. Please email us at " +
        site.email +
        " or try again in a moment.",
      values,
    };
  }
}
