/**
 * Navbar – Classic-Clean V2 (Premium Redesign)
 * Everlast-inspired: dark navy · emerald pill logo · nav island · shimmer CTA · animated hamburger
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#warum" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header
        className={`cc-nav-root fixed top-0 left-0 right-0 z-50${scrolled ? " cc-nav-scrolled" : ""}`}
      >
        <div className="container">
          <div className="cc-nav-inner">

            {/* Logo */}
            <a href="/" className="cc-nav-logo" aria-label="Classic-Clean – Startseite">
              <span className="cc-nav-logo-pill">CC</span>
              <span className="cc-nav-logo-text">Classic-Clean</span>
            </a>

            {/* Desktop Nav Island */}
            <nav className="cc-nav-links hidden lg:flex" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="cc-nav-link"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a href="tel:01636259023" className="cc-nav-phone">
                <Phone size={13} aria-hidden="true" />
                0163 6259023
              </a>
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="cc-nav-cta"
                aria-label="Anfrage starten"
              >
                <span className="cc-nav-cta-shimmer" aria-hidden="true" />
                <span className="cc-nav-cta-icon" aria-hidden="true">
                  <ArrowRight size={14} strokeWidth={1.8} />
                </span>
                <span className="cc-nav-cta-text">Anfrage starten</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cc-nav-hamburger lg:hidden"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              <span className={`cc-nav-bar${mobileOpen ? " cc-nav-bar--top-open" : ""}`} />
              <span className={`cc-nav-bar${mobileOpen ? " cc-nav-bar--mid-open" : ""}`} />
              <span className={`cc-nav-bar${mobileOpen ? " cc-nav-bar--bot-open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="cc-nav-mobile fixed inset-x-0 top-[62px] z-40 lg:hidden"
          >
            <div className="container py-5">
              <nav className="flex flex-col gap-0.5 mb-5">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.2 }}
                    onClick={() => handleNavClick(link.href)}
                    className="cc-nav-mobile-link"
                  >
                    {link.label}
                    <ArrowRight size={14} className="opacity-35" aria-hidden="true" />
                  </motion.button>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="tel:01636259023"
                  className="cc-nav-mobile-phone justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={15} aria-hidden="true" />
                  0163 6259023
                </a>
                <button
                  onClick={() => handleNavClick("#kontakt")}
                  className="cc-nav-cta cc-nav-cta--full"
                >
                  <span className="cc-nav-cta-shimmer" aria-hidden="true" />
                  <span className="cc-nav-cta-icon" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </span>
                  <span className="cc-nav-cta-text">Anfrage starten</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
