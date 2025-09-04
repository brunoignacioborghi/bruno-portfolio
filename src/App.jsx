import React from "react";
import { motion } from "framer-motion";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="site-wrapper">
      <GradientBg />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a href="#" className="brand">BRUNO<span className="brand-dot">.</span></a>
      <nav className="nav-links">
        <a href="#projects">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="btn-primary">Contactame</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-label="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
      >
        Hola! Soy <span className="accent">Bruno</span><br />
        Desarrollador <span className="stroke">React</span> & Full-stack
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Construyo interfaces limpias, rápidas y accesibles. Busco mi primer
        experiencia laboral / freelance para sumar valor real a un equipo.
      </motion.p>

      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <a href="#projects" className="btn-primary">Ver proyectos</a>
        <a href="#contact" className="btn-ghost">Hablemos</a>
      </motion.div>

      <motion.div
        className="hero-pill"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 70, damping: 12 }}
      >
        Disponible para trabajar • Córdoba, AR (remoto/onsite)
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about" aria-label="sobre-mi">
      <div className="about-card">
        <h2 className="section-title">Sobre mí</h2>
        <p>
          Soy desarrollador con foco en React. Me gusta escribir código claro,
          componible y accesible. Tengo proyectos reales: landing tipo restaurante,
          sistema de registro con verificación por email (Express/Nodemailer),
          y una app estilo &ldquo;mundopsicologos&rdquo; con perfiles.
        </p>
        <ul className="about-points">
          <li>Frontend: React, React Router, Framer Motion, CSS moderno.</li>
          <li>Backend: Node/Express, JWT auth, REST APIs.</li>
          <li>Otras: Git/GitHub, despliegue Vite/Netlify/Vercel.</li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects" aria-label="proyectos">
      <h2 className="section-title">Proyectos destacados</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
    >
      <div className="project-thumb">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-actions">
          <a className="btn-primary" href={project.github} target="_blank" rel="noreferrer">
            Ver en GitHub
          </a>
          {project.demo && (
            <a className="btn-ghost" href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Skills() {
  const skills = [
    "React", "JavaScript (ES2023)", "CSS moderno", "Framer Motion",
    "Node.js", "Express", "REST API", "JWT", "Git/GitHub", "Vite",
  ];
  return (
    <section className="skills" id="skills" aria-label="skills">
      <h2 className="section-title">Tecnologías</h2>
      <ul className="skills-list">
        {skills.map((s) => (
          <li key={s} className="skill-chip">{s}</li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-label="contacto">
      <div className="contact-card">
        <h2 className="section-title">Contacto</h2>
        <p>
          ¿Te interesa que trabajemos juntos? Escribime por email o por LinkedIn.
        </p>
        <div className="contact-actions">
          <a className="btn-primary" href="mailto:tuemail@ejemplo.com">Enviar email</a>
          <a className="btn-ghost" href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bruno — Hecho con React + Vite</p>
      <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" className="footer-link">
        GitHub
      </a>
    </footer>
  );
}

function GradientBg() {
  return (
    <div className="bg">
      <div className="bg-blob bg-1" />
      <div className="bg-blob bg-2" />
      <div className="bg-blob bg-3" />
      <div className="bg-noise" />
    </div>
  );
}
