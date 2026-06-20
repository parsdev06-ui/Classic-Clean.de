/**
 * WhySection – Classic-Clean Premium
 * Mobile-first, minimalistische Trust-Section
 * Reduziert auf Essentials: 1 Hauptkarte + 3 Vorteil-Cards + Proof-Zeile
 */
import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, CheckCircle2, Building2, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const benefitCards = [
  {
    icon: Users,
    title: "Persönliche Betreuung",
  },
  {
    icon: MessageSquare,
    title: "Klare Kommunikation",
  },
  {
    icon: Calendar,
    title: "Flexible Einsatzplanung",
  },
];

const proofItems = [
  { icon: Building2, text: "B2B-Fokus" },
  { icon: CheckCircle2, text: "Erstberatung kostenlos" },
  { icon: MapPin, text: "Berlin & Brandenburg" },
];

export default function WhySection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="warum" className="bg-white py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.23em] text-emerald-600 mb-3">
            Warum Classic-Clean
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 leading-tight mb-4">
            Reinigung, die planbar bleibt.
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-8">
            Für Unternehmen, die nicht nur saubere Flächen erwarten, sondern feste Ansprechpartner, klare Abläufe und zuverlässige Betreuung.
          </p>
        </motion.div>

        {/* Main Premium Card */}
        <motion.article
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl mx-auto mb-8 md:mb-12 rounded-[2rem] border border-slate-200 bg-slate-50/50 p-6 md:p-8"
        >
          <h3 className="text-2xl md:text-2xl font-semibold text-slate-950 leading-snug mb-4">
            Feste Betreuung.
            <br />
            Klare Abläufe.
            <br />
            Saubere Ergebnisse.
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-8">
            Classic-Clean verbindet persönliche Beratung mit zuverlässiger Ausführung – abgestimmt auf Büro-, Gewerbe- und Einrichtungsflächen.
          </p>
        </motion.article>

        {/* Benefit Cards - 3 compact */}
        <motion.div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          {benefitCards.map((benefit, i) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.16 + i * 0.08 }}
              className="rounded-[1.25rem] border border-slate-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <benefit.icon size={18} className="stroke-[1.8]" />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-slate-950">
                {benefit.title}
              </h4>
            </motion.article>
          ))}
        </motion.div>

        {/* Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-slate-600 px-4"
        >
          {proofItems.map((item, i) => (
            <div key={item.text} className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <item.icon size={12} />
              </div>
              <span>{item.text}</span>
              {i < proofItems.length - 1 && <span className="mx-1 text-slate-300">·</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
