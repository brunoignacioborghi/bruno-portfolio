import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
    >
      <div className="project-thumb">
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-actions">
          <a
            className="btn-primary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          {project.demo && (
            <a
              className="btn-ghost"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
