import React from "react";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript (ES2023)",
    "Modern CSS",
    "Framer Motion",
    "Node.js",
    "Express",
    "REST API",
    "JWT",
    "Git/GitHub",
    "Vite",
  ];
  return (
    <section className="skills" id="skills" aria-label="skills">
      <h2 className="section-title">Technologies</h2>
      <ul className="skills-list">
        {skills.map((s) => (
          <li key={s} className="skill-chip">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
