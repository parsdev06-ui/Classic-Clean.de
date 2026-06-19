/**
 * ServiceAreasSection – Classic-Clean V2
 * Design: Local-SEO-freundlich, moderne Pills, kein überladene Karte
 */
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const areas = [
  "Berlin",
  "Neukölln",
  "Treptow",
  "Friedrichshain",
  "Kreuzberg",
  "Tempelhof",
  "Schöneberg",
  "Potsdam",
  "Teltow",
  "Ludwigsfelde",
  "Oranienburg",
  "Bernau",
];

export default function ServiceAreasSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="cc-section"
      style={{ background: "white" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="cc-tag mb-4 inline-flex">
              <MapPin size={12} />
              Einsatzgebiete
            </span>
            <h2 className="cc-headline mb-5">
              Gebäudereinigung in Berlin & Brandenburg.
            </h2>
            <p className="cc-subheadline mb-6">
              Classic-Clean betreut Unternehmen in Berlin, Brandenburg und Umgebung in einem Umkreis von ca. 50 km – persönlich und zuverlässig vor Ort.
            </p>
            <button
              onClick={scrollToContact}
              className="cc-btn-primary"
            >
              Anfrage für Ihre Region
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Right: Location Pills */}
          <div ref={ref}>
            {/* Map visual placeholder – abstract gradient */}
            <div
              className="relative rounded-2xl overflow-hidden mb-6 p-8"
              style={{
                background: "linear-gradient(135deg, #EEF2FF 0%, #F0FDF4 100%)",
                border: "1px solid #E5E7EB",
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
                style={{ width: 300, height: 300, background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{ width: 200, height: 200, border: "2px solid #2563EB" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{ width: 120, height: 120, border: "2px solid #2563EB" }}
              />

              {/* Center pin */}
              <div className="relative flex flex-col items-center justify-center py-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "#2563EB" }}
                >
                  <MapPin size={22} className="text-white" />
                </div>
                <span className="font-bold text-lg" style={{ color: "#102A43" }}>
                  Berlin & Brandenburg
                </span>
                <span className="text-sm mt-1" style={{ color: "#6B7280" }}>
                  ca. 50 km Umkreis
                </span>
              </div>

              {/* Location pills */}
              <div className="relative flex flex-wrap gap-2 justify-center mt-2">
                {areas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50"
                    style={{
                      background: "white",
                      borderColor: "#E5E7EB",
                      color: "#374151",
                    }}
                  >
                    <MapPin size={11} style={{ color: "#10B981" }} />
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
