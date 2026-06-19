/**
 * Navbar – Classic-Clean V2
 * Design: Berliner Klarheit – Glassmorphism, sticky, scroll-aware
 * Colors: Navy #102A43, Emerald #10B981, Blue CTA #2563EB
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "cc-navbar-scrolled" : "cc-navbar-glass"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Classic-Clean Startseite"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#102A43" }}>
                <span className="text-white font-bold text-sm tracking-tight">CC</span>
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ color: "#102A43" }}>
                Classic-Clean
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 hover:bg-gray-100"
                  style={{ color: "#374151" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:01636259023"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "#6B7280" }}
              >
                <Phone size={14} />
                0163 6259023
              </a>
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="cc-btn-primary text-sm py-2 px-4"
              >
                Anfrage starten
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md transition-colors hover:bg-gray-100"
              aria-label="Menü öffnen"
              style={{ color: "#102A43" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-xl lg:hidden"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-colors hover:bg-gray-50"
                    style={{ color: "#111827" }}
                  >
                    {link.label}
                    <ChevronRight size={16} style={{ color: "#9CA3AF" }} />
                  </button>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:01636259023"
                  className="cc-btn-secondary justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} />
                  0163 6259023
                </a>
                <button
                  onClick={() => handleNavClick("#kontakt")}
                  className="cc-btn-primary justify-center"
                >
                  Anfrage starten
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
