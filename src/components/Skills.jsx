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
      <div className="skills-inner">
        <h2 className="section-title">Technologies</h2>
        <ul className="skills-list">
          {skills.map((s) => (
            <li key={s} className="skill-chip">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

