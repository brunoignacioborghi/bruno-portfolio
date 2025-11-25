// src/components/Projects.jsx
import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

import factura1 from "../assets/FacturaGPT1.png";
import factura2 from "../assets/FacturaGPT2.png";
import factura3 from "../assets/FacturaGPT3.png";
import factura4 from "../assets/FacturaGPT4.png";

export default function Projects() {
  const [showFactura, setShowFactura] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const facturaImages = [factura1, factura2, factura3, factura4];

  return (
    <section className="projects" id="projects" aria-label="projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>

        <button
          type="button"
          className="projects-toggle"
          onClick={() => setShowFactura((prev) => !prev)}
          aria-label="Toggle FacturaGPT view"
        >
          <span>
            {showFactura ? "Back to portfolio" : "View FacturaGPT work"}
          </span>
          <span
            className={
              "projects-toggle-arrow" + (showFactura ? " is-open" : "")
            }
          >
            ➜
          </span>
        </button>
      </div>

      {showFactura ? (
        <div className="facturagpt-wrapper">
          <div className="facturagpt-grid">
            {facturaImages.map((img, idx) => (
              <div
                key={idx}
                className="facturagpt-card"
                onClick={() => setSelectedImage(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img)}
              >
                <img src={img} alt={`FacturaGPT view ${idx + 1}`} />
              </div>
            ))}
          </div>

          <p className="facturagpt-text">
            FacturaGPT is a Spain-based company focused on intelligent document
            automation for invoices and business workflows. Since early 2025 I
            have been working as an AI Automation Developer, building OCR and
            NLP pipelines, React dashboards and Node.js services to process,
            validate and analyze documents end-to-end.
          </p>

          {selectedImage && (
            <div
              className="image-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="FacturaGPT enlarged view"
                className="image-enlarged"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}
