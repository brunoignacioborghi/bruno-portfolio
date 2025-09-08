import React from "react";
import { handleSmoothAnchorClick } from "../utils/scroll";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" className="brand">
        BRUNO<span className="brand-dot">.</span>
      </a>
      <nav className="nav-links">
        <a href="#projects" onClick={handleSmoothAnchorClick}>Projects</a>
        <a href="#skills" onClick={handleSmoothAnchorClick}>Skills</a>
        <a href="#contact" className="btn-primary" onClick={handleSmoothAnchorClick}>
          Contact
        </a>
      </nav>
    </header>
  );
}
