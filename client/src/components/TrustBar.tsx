/**
 * TrustBar – Classic-Clean Premium
 * Kompakte Trust-Section mit eleganter Typografie und feinen Cards.
 */
import { motion } from "framer-motion";
import { ShieldCheck, Sparkle, Clock, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const trustItems = [
  {
    icon: Users,
    title: "Persönlicher Ansprechpartner",
    text: "Feste Betreuung, klare Kommunikation und schnelle Abstimmung.",
  },
  {
    icon: Sparkle,
    title: "Flexible Reinigungslösungen",
    text: "Maßgeschneiderte Reinigung für Büro, Praxis, Handel und Gewerbe.",
  },
  {
    icon: Clock,
    title: "Angebot in 24 Stunden",
    text: "Unverbindliches Angebot innerhalb eines Werktages.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Betreuung",
    text: "Regelmäßige Qualitätskontrolle und langfristiger Service.",
  },
];

export default function TrustBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.23em] text-emerald-600 mb-3">
            Unsere Qualitätsversprechen
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight">
            Vertrauen, das Ihre Gewerbeflächen langfristig schützt.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                <item.icon size={20} className="stroke-[1.8]" />
              </div>
              <h3 className="text-base font-semibold text-slate-950 mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
