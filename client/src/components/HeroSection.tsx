/**
 * HeroSection – Classic-Clean V2
 * Design: Asymmetrisch – Text links, Premium-Visual rechts
 * Large typography, trust mini-bar, 3 CTAs
 */
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronRight, MapPin, Clock, CheckCircle2 } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/hero-cleaning-WQb9oSeGqgDESDm6rJnQAA.webp";

const trustItems = [
  { icon: MapPin, text: "Berlin & Brandenburg" },
  { icon: CheckCircle2, text: "B2B-Reinigung" },
  { icon: Clock, text: "Angebot in 24 Stunden" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F0FDF4 100%)" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Tag */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="cc-tag">
                <CheckCircle2 size={12} />
                Professionelle Gebäudereinigung
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                letterSpacing: "-0.03em",
                color: "#102A43",
                lineHeight: 1.08,
              }}
            >
              Professionelle Gebäudereinigung für Unternehmen in Berlin & Brandenburg.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="cc-subheadline max-w-lg"
            >
              Classic-Clean sorgt für saubere, gepflegte und zuverlässige Arbeitsumgebungen – persönlich betreut, flexibel geplant und professionell umgesetzt.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#kontakt")}
                className="cc-btn-primary"
              >
                Kostenlose Beratung anfragen
                <ChevronRight size={16} />
              </button>
              <a
                href="tel:01636259023"
                className="cc-btn-secondary"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
                target="_blank"
                rel="noopener noreferrer"
                className="cc-btn-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust mini-bar */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 pt-2"
            >
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon size={14} style={{ color: "#10B981" }} />
                  <span className="text-sm font-medium" style={{ color: "#6B7280" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 24px 80px rgba(16, 42, 67, 0.18)" }}
            >
              <img
                src={HERO_IMG}
                alt="Professionelle Büroreinigung in Berlin – Classic-Clean Team bei der Arbeit"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3", objectPosition: "center" }}
                loading="eager"
              />
              {/* Subtle overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(16,42,67,0.15) 100%)",
                }}
              />
            </div>

            {/* Floating trust card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 hidden sm:flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(16, 185, 129, 0.1)" }}
              >
                <CheckCircle2 size={20} style={{ color: "#10B981" }} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#102A43" }}>
                  Kostenlose Erstberatung
                </div>
                <div className="text-xs" style={{ color: "#6B7280" }}>
                  Angebot innerhalb von 24 Stunden
                </div>
              </div>
            </motion.div>

            {/* Floating region card */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 hidden sm:flex items-center gap-2"
            >
              <MapPin size={16} style={{ color: "#2563EB" }} />
              <span className="text-sm font-semibold" style={{ color: "#102A43" }}>
                Berlin & Brandenburg
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
