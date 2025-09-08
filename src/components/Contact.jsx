import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMsg("");

    setSubmitting(true);
    setSent(true);

    emailjs
      .send("service_b0zwwb8", "template_audsfte", formData, "JHMxjrayYfeb9p17n")
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSent(false);
        setSubmitting(false);
        setErrorMsg("Failed to send. Please try again.");
      });
  };

  return (
    <section className="contact" id="contact" aria-label="contact">
      <div className="contact-card">
        <h2 className="section-title">Contact</h2>

        {!sent ? (
          <form className="contact-form" onSubmit={sendEmail} aria-busy={submitting}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={submitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={submitting}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={submitting}
            />
            <button
              type="submit"
              className="btn-primary btn-submit"
              disabled={submitting}
            >
              {submitting ? (
                <span className="inline-row">
                  <svg className="spinner-svg" viewBox="0 0 50 50" aria-hidden="true">
                    <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="6" fill="none" opacity="0.25" />
                    <path d="M25 5 a20 20 0 0 1 0 40" stroke="currentColor" strokeWidth="6" fill="none">
                      <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite" />
                    </path>
                  </svg>
                  Sending…
                </span>
              ) : (
                "Send"
              )}
            </button>

            {errorMsg && (
              <p className="success error-text">{errorMsg}</p>
            )}
          </form>
        ) : (
          <motion.p
            className="success"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            ✅ Thanks for reaching out! I'll get back to you soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}
