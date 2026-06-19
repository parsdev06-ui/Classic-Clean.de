/**
 * WhySection – Classic-Clean V2
 * Design: Starke Vertrauenssektion für neu gegründetes Unternehmen
 * Keine Fake-Statistiken, keine erfundenen Bewertungen
 * Links Text + Highlights, rechts kompakte Feature-Cards
 */
import { motion } from "framer-motion";
import { UserCheck, MessageSquare, CalendarCheck, Building2, Gift, MapPin, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const trustFeatures = [
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    text: "Fester Ansprechpartner – keine anonymen Callcenter.",
  },
  {
    icon: MessageSquare,
    title: "Klare Kommunikation",
    text: "Transparente Angebote und ehrliche Rückmeldungen.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Einsatzplanung",
    text: "Reinigung nach Ihrem Zeitplan – morgens, abends oder am Wochenende.",
  },
  {
    icon: Building2,
    title: "B2B-Fokus",
    text: "Ausschließlich für Unternehmen, Büros und Einrichtungen.",
  },
  {
    icon: Gift,
    title: "Kostenlose Erstberatung",
    text: "Unverbindliches Gespräch und Angebot – ohne versteckte Kosten.",
  },
  {
    icon: MapPin,
    title: "Berlin & Brandenburg",
    text: "Lokaler Dienstleister mit persönlichem Einsatz vor Ort.",
  },
];

const highlights = [
  "Professionelle Kommunikation von Anfang an",
  "Klare Prozesse und transparente Preise",
  "Individuelle Reinigungskonzepte für Ihr Unternehmen",
  "Persönlicher Ansprechpartner – immer erreichbar",
];

export default function WhySection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="warum" className="cc-section" style={{ background: "white" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <span className="cc-tag mb-4 inline-flex">Warum Classic-Clean</span>
            <h2 className="cc-headline mb-5">
              Warum Unternehmen auf Classic-Clean setzen.
            </h2>
            <p className="cc-subheadline mb-8">
              Vertrauen entsteht nicht durch große Versprechen, sondern durch professionelle Kommunikation, klare Prozesse und persönliche Betreuung.
            </p>

            {/* Highlight list */}
            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="cc-check-item">
                  <span className="text-base" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="cc-btn-primary"
            >
              Jetzt kostenlos anfragen
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Right: Feature Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="cc-card"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(16, 185, 129, 0.08)" }}
                >
                  <feature.icon size={16} style={{ color: "#10B981" }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-1.5"
                  style={{ color: "#102A43" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
