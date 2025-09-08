import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showPhones, setShowPhones] = useState(false);
  const popoverRef = useRef(null);
  const callBtnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowPhones(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!showPhones) return;
    const onDocClick = (e) => {
      const pop = popoverRef.current;
      const btn = callBtnRef.current;
      if (!pop || !btn) return;
      if (!pop.contains(e.target) && !btn.contains(e.target)) setShowPhones(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showPhones]);

  const gmailComposeHref =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=brunoignacioborghi1@gmail.com" +
    "&su=" + encodeURIComponent("Hi Bruno — from your portfolio") +
    "&body=" + encodeURIComponent("Hi Bruno,\n\nI just visited your portfolio and would like to get in touch about...");

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bruno — Built with React + Vite</p>

      <div className="footer-links">
        {/* GitHub */}
        <motion.a
          className="footer-link icon-link"
          href="https://github.com/brunoignacioborghi"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="icon-18" src="https://cdn.simpleicons.org/github" alt="GitHub" loading="lazy" decoding="async" />
          <span>GitHub</span>
        </motion.a>

        {/* Instagram */}
        <motion.a
          className="footer-link icon-link"
          href="https://www.instagram.com/bruno_borghi?igsh=ZzR5ZzVlbHhjMjd3"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="icon-18" src="https://cdn.simpleicons.org/instagram" alt="Instagram" loading="lazy" decoding="async" />
          <span>Instagram</span>
        </motion.a>

        {/* Email */}
        <motion.a
          className="footer-link icon-link"
          href={gmailComposeHref}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="icon-18" src="https://cdn.simpleicons.org/gmail" alt="Email" loading="lazy" decoding="async" />
          <span>Email</span>
        </motion.a>

        {/* Call  */}
        <div className="call-wrapper">
          <motion.button
            ref={callBtnRef}
            type="button"
            className="footer-link icon-link btn-reset"
            onClick={() => setShowPhones((v) => !v)}
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-haspopup="true"
            aria-expanded={showPhones}
            aria-controls="phone-popover"
          >
            <svg className="icon-18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.11a1 1 0 01-.91 1C16.43 21.9 7.99 13.57 6.38 5.91a1 1 0 011-1h3.11a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
              />
            </svg>
            <span>Call</span>
          </motion.button>

          <AnimatePresence>
            {showPhones && (
              <motion.div
                ref={popoverRef}
                id="phone-popover"
                className="call-popover"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
              >
                <div className="call-list">
                  <motion.a
                    className="footer-link icon-link"
                    href="tel:+5493515148526"
                    whileHover={{ x: 2 }}
                    onClick={() => setShowPhones(false)}
                  >
                    <img className="icon-18 flag" src="https://flagcdn.com/w20/ar.png" alt="Argentina" loading="lazy" decoding="async" />
                    <span>+54 9 351 514 8526</span>
                  </motion.a>

                  <motion.a
                    className="footer-link icon-link"
                    href="tel:+14355139189"
                    whileHover={{ x: 2 }}
                    onClick={() => setShowPhones(false)}
                  >
                    <img className="icon-18 flag" src="https://flagcdn.com/w20/us.png" alt="USA" loading="lazy" decoding="async" />
                    <span>+1 435 513 9189</span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp */}
        <motion.a
          className="footer-link icon-link"
          href="https://wa.me/5493512626619"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="icon-18" src="https://cdn.simpleicons.org/whatsapp" alt="WhatsApp" loading="lazy" decoding="async" />
          <span>WhatsApp</span>
        </motion.a>
      </div>
    </footer>
  );
}
