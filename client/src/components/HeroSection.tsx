/**
 * HeroSection – Classic-Clean V2
 * Design: Mobile-first Premium Hero mit reduzierter Conversion-Hierarchie
 */
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronRight, MapPin, Clock, CheckCircle2 } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/hero-cleaning-WQb9oSeGqgDESDm6rJnQAA.webp";

const trustItems = [
  { icon: MapPin, text: "Berlin & Brandenburg" },
  { icon: CheckCircle2, text: "Feste Ansprechpartner" },
  { icon: Clock, text: "Angebot in 24h" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.15 } },
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
    <section className="relative overflow-hidden bg-[#F8F7F2] py-14 md:py-20">
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="order-2 lg:order-1 flex flex-col gap-6"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="cc-tag inline-flex"
            >
              Gebäudereinigung für Unternehmen
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-3xl sm:text-[2.75rem] md:text-4xl font-semibold tracking-tight text-slate-950 leading-[1.08]"
            >
              Saubere Gewerbeflächen.
              <br />
              Zuverlässig betreut.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="cc-subheadline max-w-2xl text-slate-600"
            >
              Classic-Clean übernimmt Büro-, Gewerbe- und Unterhaltsreinigung in Berlin & Brandenburg – mit festen Ansprechpartnern, klaren Abläufen und flexibler Einsatzplanung.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-col gap-4 max-w-md">
              <button
                type="button"
                onClick={() => scrollTo("#kontakt")}
                className="cc-btn-primary w-full justify-center"
              >
                Kostenlose Beratung anfragen
                <ChevronRight size={16} />
              </button>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
                <a href="tel:01636259023" className="hover:text-emerald-600 transition-colors">Jetzt anrufen</a>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <a
                  href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors"
                >
                  WhatsApp schreiben
                </a>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <button
                  type="button"
                  onClick={() => scrollTo("#kontakt")}
                  className="font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Angebot in 24h
                </button>
              </div>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm">
                  <item.icon size={16} className="text-emerald-600" />
                  <span className="text-sm font-medium text-slate-600">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageFade}
            className="order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_60px_rgba(16,42,67,0.12)]">
              <img
                src={HERO_IMG}
                alt="Saubere Gewerbeflächen von Classic-Clean in Berlin"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3", objectPosition: "center" }}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
