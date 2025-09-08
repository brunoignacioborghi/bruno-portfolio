import React, { useState, useEffect } from "react";

import profilePic from "../assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { handleSmoothAnchorClick } from "../utils/scroll";

export default function Hero() {
  const [openAvatar, setOpenAvatar] = useState(false);

  useEffect(() => {
    if (!openAvatar) return;
    const onKey = (e) => e.key === "Escape" && setOpenAvatar(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openAvatar]);

  return (
    <section className="hero" id="home" aria-label="hero">
      <motion.img
        src={profilePic}
        alt="Bruno profile"
        className="hero-avatar avatar-clickable"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 80 }}
        onClick={() => setOpenAvatar(true)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenAvatar(true)}
        tabIndex={0}
        role="button"
        aria-label="Open profile photo"
      />

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
      >
        Hi! I'm <span className="accent">Bruno</span>
        <br />
        React <span className="stroke">Developer</span> & Full-stack
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        I build clean, fast, and accessible interfaces. I'm looking for my first
        professional experience / freelance opportunities to add real value to
        a team.
      </motion.p>

      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <a href="#projects" className="btn-primary" onClick={handleSmoothAnchorClick}>
          View Projects
        </a>
        <a href="#contact" className="btn-ghost" onClick={handleSmoothAnchorClick}>
          Let's talk
        </a>
      </motion.div>

      <motion.div
        className="hero-pill"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 70, damping: 12 }}
      >
        Open to work • Córdoba, AR (remote / onsite)
      </motion.div>

      <AnimatePresence>
        {openAvatar && (
          <motion.div
            key="overlay"
            className="avatar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenAvatar(false)}
            aria-label="Close profile photo"
          >
            <motion.img
              src={profilePic}
              alt="Bruno profile enlarged"
              className="avatar-enlarged"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
