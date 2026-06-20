/**
 * TrustBar – Classic-Clean Premium
 * Premium Trust-Section mit ruhigem Off-White, feinen Karten und klarer Typografie
 */
import { motion } from "framer-motion";
import { ShieldCheck, Sparkle, Clock, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const trustItems = [
  {
    icon: Users,
    title: "Persönlicher Ansprechpartner",
    text: "Ein fester Ansprechpartner begleitet Sie von der Beratung bis zur Reinigungsausführung.",
  },
  {
    icon: Sparkle,
    title: "Flexible Reinigungslösungen",
    text: "Modulare Leistungen für Büro, Praxis und Gewerbe – individuell abgestimmt auf Ihren Bedarf.",
  },
  {
    icon: Clock,
    title: "Angebot in 24 Stunden",
    text: "Schnelle Rückmeldung und ein transparentes Angebot innerhalb eines Werktages.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Betreuung",
    text: "Verlässliche Abläufe, regelmäßige Qualitätskontrollen und ein nachhaltiger Service.",
  },
];

export default function TrustBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="bg-[#F8F7F2] border-t border-slate-200 border-b border-slate-200">
      <div className="container py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-3">
            Vertrauen, das sichtbar wirkt
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 leading-tight">
            Premium Reinigung mit Persönlichkeit und höchster Zuverlässigkeit
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-8">
            Vier Gründe, warum unsere Kunden uns als professionellen Partner für ihre Gewerbeflächen wählen.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm shadow-slate-200/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5">
                <item.icon size={22} className="stroke-[1.8]" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-2">
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
