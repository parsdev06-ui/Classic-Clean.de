/**
 * TrustBar – Classic-Clean V2 Dark Theme
 * Dark navy background with glow cards, emerald/blue gradient borders
 */
import { motion } from "framer-motion";
import { Users, Clock, Zap, Shield } from "lucide-react";
import { useInView } from "../hooks/useInView";

const trustItems = [
  {
    icon: Users,
    title: "Fester Ansprechpartner",
    text: "Klare Kommunikation, zuverlässige Betreuung und schnelle Abstimmung.",
  },
  {
    icon: Clock,
    title: "Angebot in 24 Stunden",
    text: "Unverbindliches Kostenvoranschlag innerhalb eines Werktages.",
  },
  {
    icon: Zap,
    title: "Flexible Einsatzzeiten",
    text: "Maßgeschneiderte Reinigungszeitfenster für Ihr Geschäft.",
  },
  {
    icon: Shield,
    title: "Qualität mit System",
    text: "Regelmäßige Qualitätskontrolle und langfristige Partnerschaft.",
  },
];

export default function TrustBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      className="border-t"
      style={{
        backgroundColor: "#0A1D2E",
        borderColor: "rgba(255, 255, 255, 0.07)",
      }}
    >
      <div className="container py-16 md:py-24">
        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="cc-glow-card group"
            >
              <div className="cc-glow-card-icon mb-4 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.24)]">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <h3
                className="mb-2 font-semibold leading-tight transition-colors group-hover:text-emerald-300"
                style={{
                  fontSize: "1rem",
                  color: "#F1F5F9",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#A8B4C3",
                }}
              >
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
