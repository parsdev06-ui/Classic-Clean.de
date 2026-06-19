/**
 * ServicesSection – Classic-Clean V2
 * Design: 2x2 Premium Grid, einheitliche Bildsprache, klare CTAs
 * Keine Fake-Bilder, keine kaputten Imports
 */
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    id: "buero",
    title: "Büroreinigung",
    description: "Regelmäßige und gründliche Reinigung von Büros, Kanzleien und Verwaltungsflächen.",
    benefits: ["Gepflegte Arbeitsplätze", "Flexible Reinigungszeiten", "Zuverlässige Ausführung"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/service-office-5Vh9KqeQ8h7rQfujv7oCYE.webp",
    tag: "Büros & Kanzleien",
  },
  {
    id: "gewerbe",
    title: "Gewerbereinigung",
    description: "Professionelle Reinigung von Gewerbe- und Handelsflächen aller Größen.",
    benefits: ["Großflächige Reinigung", "Professionelle Ausrüstung", "Termingerechte Durchführung"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/service-commercial-JTJrQocMJXcwsMycL2qvJA.webp",
    tag: "Gewerbeflächen",
  },
  {
    id: "altenheim",
    title: "Altenheimreinigung",
    description: "Hygienische Reinigung mit besonderem Fokus auf Sicherheit und Sauberkeit in Pflegeeinrichtungen.",
    benefits: ["Höchste Hygienestandards", "Sensibles Umfeld", "Zuverlässige Betreuung"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/service-care-KVLPXpqmJrKeF8idntTt8n.webp",
    tag: "Pflegeeinrichtungen",
  },
  {
    id: "unterhalts",
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung zur dauerhaften Erhaltung höchster Hygienestandards.",
    benefits: ["Regelmäßige Intervalle", "Langfristige Partnerschaft", "Konstante Qualität"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663776473482/PTubTURjaCCdNJxrZia5nq/service-maintenance-998EtQ2PqMgYKCBw8p87zZ.webp",
    tag: "Regelmäßige Pflege",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="leistungen" className="cc-section" style={{ background: "#F8FAFC" }}>
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="cc-tag mb-4 inline-flex">Unsere Leistungen</span>
          <h2 className="cc-headline mb-4">
            Reinigungsleistungen für Ihr Unternehmen.
          </h2>
          <p className="cc-subheadline">
            Von der Büroreinigung bis zur Altenheimpflege – Classic-Clean bietet maßgeschneiderte Reinigungskonzepte für jede Anforderung.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: "0 2px 12px rgba(16,42,67,0.05)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={service.image}
                  alt={`${service.title} – Classic-Clean Berlin`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(16,42,67,0.4) 100%)" }} />
                {/* Tag overlay */}
                <div className="absolute top-3 left-3">
                  <span className="cc-tag text-xs">{service.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-bold text-xl mb-2"
                  style={{ color: "#102A43", letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="flex flex-col gap-2 mb-5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={14} style={{ color: "#10B981", flexShrink: 0 }} />
                      <span className="text-sm font-medium" style={{ color: "#374151" }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 hover:gap-2.5"
                  style={{ color: "#2563EB" }}
                >
                  Beratung anfragen
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
