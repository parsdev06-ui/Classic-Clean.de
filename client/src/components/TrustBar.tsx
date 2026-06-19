/**
 * TrustBar – Classic-Clean V2
 * Design: Kompakte 4er USP-Section, keine riesigen Card-Wände
 * Icons klein, Text klar, Hover-Effekte dezent
 */
import { motion } from "framer-motion";
import { UserCheck, Settings, Clock, Shield } from "lucide-react";
import { useInView } from "../hooks/useInView";

const usps = [
  {
    icon: UserCheck,
    title: "Persönlicher Ansprechpartner",
    text: "Ein fester Kontakt für Beratung, Rückfragen und laufende Abstimmung.",
  },
  {
    icon: Settings,
    title: "Flexible Reinigungslösungen",
    text: "Individuelle Reinigungskonzepte für Büros, Gewerbeflächen und Einrichtungen.",
  },
  {
    icon: Clock,
    title: "Angebot in 24 Stunden",
    text: "Schnelle Rückmeldung und ein unverbindliches Angebot nach dem Erstkontakt.",
  },
  {
    icon: Shield,
    title: "Zuverlässige Betreuung",
    text: "Klare Kommunikation, saubere Durchführung und langfristige Zusammenarbeit.",
  },
];

export default function TrustBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      style={{ background: "white", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="container py-12 md:py-16">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(16, 185, 129, 0.08)" }}
              >
                <usp.icon size={18} style={{ color: "#10B981" }} />
              </div>

              {/* Divider */}
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#10B981", opacity: 0.5 }} />

              {/* Text */}
              <div>
                <h3
                  className="font-semibold text-base mb-1.5"
                  style={{ color: "#102A43" }}
                >
                  {usp.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {usp.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
