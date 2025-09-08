import React from "react";

export default function About() {
  return (
    <section className="about" id="about" aria-label="about">
      <div className="about-card">
        <h2 className="section-title">About me</h2>
        <p>
          I'm a developer focused on React. I like to write clean, reusable, and accessible code.
          I already built real-world projects, including a restaurant landing page with filters and tags,
          and an authentication system with email verification using Express and Nodemailer.
        </p>
        <ul className="about-points">
          <li>Frontend: React, React Router, Framer Motion, modern CSS.</li>
          <li>Backend: Node/Express, JWT auth, REST APIs.</li>
          <li>Other: Git/GitHub, deployment with Vite/Netlify/Vercel.</li>
        </ul>
      </div>
    </section>
  );
}
