"use client";

import type { FormEvent } from "react";
import { siteConfig } from "../site-config";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const topic = String(form.get("topic") ?? "General enquiry").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Enquiry: ${topic}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Bryt Kids enquiry — ${topic}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>What can we help with?</span>
          <select name="topic" defaultValue="General enquiry">
            <option>General enquiry</option>
            <option>1:1 consultation</option>
            <option>Private coaching</option>
            <option>Homeschool support</option>
            <option>Family strategy</option>
            <option>Programs</option>
          </select>
        </label>
        <label className="form-grid__wide">
          <span>Your message</span>
          <textarea name="message" rows={6} required />
        </label>
      </div>
      <div className="contact-form__footer">
        <p>Submitting opens your email app with your message prepared.</p>
        <button className="button button--primary" type="submit">Prepare Email</button>
      </div>
    </form>
  );
}
