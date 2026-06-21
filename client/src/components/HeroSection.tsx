/**
 * HeroSection – Classic-Clean V2
 * Design: Text-First Dark Hero with Controlled Glow Effects
 * Inspired by kiberatung.de (visual reference only)
 */
import { motion, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CurvedWordLoop from "./CurvedWordLoop";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55 },
  }),
};

export default function HeroSection() {
  const glowWordControls = useAnimation();
  const [showShine, setShowShine] = useState(false);
  const glowWordRef = useRef<HTMLSpanElement>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Trigger glow word animation after initial entrance animations
    const timer = setTimeout(() => {
      setShowShine(true);
    }, 350); // Wait for label and first H1 line to enter

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `
          radial-gradient(ellipse at 50% 18%, rgba(37, 99, 235, 0.18), transparent 48%),
          radial-gradient(ellipse at 50% 62%, rgba(16, 185, 129, 0.10), transparent 46%),
          linear-gradient(180deg, #061522 0%, #071827 100%)
        `,
      }}
    >
      <div className="container relative">
        <div className="flex flex-col items-center">
          {/* Hero Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="cc-glow-label mb-6 md:mb-7"
          >
            Gebäudereinigung für Unternehmen
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-center text-white mb-6 md:mb-8"
            style={{
              fontSize: "clamp(2.625rem, 6vw, 4.875rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: "900px",
              textWrap: "balance",
            }}
          >
            <span className="block">Saubere Gewerbeflächen.</span>
            <span className="block">
              <motion.span
                ref={glowWordRef}
                initial="hidden"
                animate={showShine ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 0.15, duration: 0.35 },
                  },
                }}
                className="cc-hero-glow-word"
                style={{
                  animation: showShine
                    ? "cc-text-shine 1100ms ease-out 600ms 1 both"
                    : "none",
                }}
              >
                Zuverlässig
              </motion.span>{" "}
              betreut.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-center mb-8 md:mb-10"
            style={{
              color: "#A8B4C3",
              fontSize: "clamp(1rem, 1.125rem, 1.25rem)",
              lineHeight: 1.6,
              maxWidth: "700px",
              fontWeight: 400,
            }}
          >
            Classic-Clean übernimmt Büro-, Gewerbe- und Unterhaltsreinigung in Berlin & Brandenburg – mit festen Ansprechpartnern, klaren Abläufen und flexibler Einsatzplanung.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.button
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            type="button"
            onClick={() => scrollTo("#kontakt")}
            className="cc-glow-cta mb-5 md:mb-6 w-full md:w-auto"
          >
            Kostenlose Beratung anfragen
            <ChevronRight size={18} strokeWidth={2} />
          </motion.button>

          {/* Secondary Contact Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm mb-12 md:mb-16"
          >
            <a
              href="tel:01636259023"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Jetzt anrufen
            </a>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <a
              href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              WhatsApp schreiben
            </a>
          </motion.div>

          {/* Proof Line */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="text-xs text-slate-400 mb-12 md:mb-16 tracking-wide"
          >
            Unverbindlich · Angebot in 24 Stunden
          </motion.div>

          {/* Curved Word Loop */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
          >
            <CurvedWordLoop />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
