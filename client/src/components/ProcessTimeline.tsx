/**
 * ProcessTimeline – Classic-Clean V2
 * Design: Moderne Timeline, klare Nummerierung, dezente Verbindungslinie
 * Keine großen Fotos, kleine Icons, sauber responsive
 */
import { motion } from "framer-motion";
import { Phone, MessageSquare, FileText, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Anfrage stellen",
    text: "Sie kontaktieren uns telefonisch, per E-Mail oder WhatsApp – unkompliziert und direkt.",
    color: "#2563EB",
    bgColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Kostenlose Beratung",
    text: "Wir besprechen Ihre Flächen, Anforderungen und gewünschten Reinigungszeiten.",
    color: "#2563EB",
    bgColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "03",
    icon: FileText,
    title: "Individuelles Angebot",
    text: "Sie erhalten ein transparentes und unverbindliches Angebot innerhalb von 24 Stunden.",
    color: "#2563EB",
    bgColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Reinigung starten",
    text: "Nach Ihrer Freigabe starten wir zuverlässig mit der professionellen Durchführung.",
    color: "#2563EB",
    bgColor: "rgba(37, 99, 235, 0.08)",
  },
];

export default function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="ablauf"
      className="cc-section"
      style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="cc-tag mb-4 inline-flex">Unser Ablauf</span>
          <h2 className="cc-headline mb-4">
            In 4 Schritten zur professionellen Reinigung.
          </h2>
          <p className="cc-subheadline">
            Einfach, transparent und ohne Umwege – so läuft die Zusammenarbeit mit Classic-Clean ab.
          </p>
        </div>

        {/* Timeline Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: "linear-gradient(to right, transparent, #C7D2FE 16%, #C7D2FE 84%, transparent)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 font-bold text-lg relative"
                style={{
                  background: "white",
                  border: `2px solid ${step.color}`,
                  color: step.color,
                  boxShadow: "0 0 0 6px #F8FAFC, 0 4px 14px rgba(16,42,67,0.08)",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: step.bgColor }}
              >
                <step.icon size={17} style={{ color: step.color }} />
              </div>

              {/* Content */}
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "#102A43", letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
