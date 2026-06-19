/**
 * FinalCTABanner – Classic-Clean V2
 * Design: Dark Navy Banner mit starker CTA vor der Kontaktsektion
 */
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function FinalCTABanner() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-20"
      style={{ background: "#102A43" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Text */}
          <div>
            <h2
              className="font-bold mb-2"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                letterSpacing: "-0.02em",
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Bereit für saubere Arbeitsflächen?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>
              Kostenlose Beratung · Angebot in 24 Stunden · Berlin & Brandenburg
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-150 hover:opacity-90 active:scale-95"
              style={{ background: "#10B981", color: "white" }}
            >
              Jetzt anfragen
              <ChevronRight size={15} />
            </button>
            <a
              href="tel:01636259023"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-150 hover:bg-white/15 active:scale-95"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Phone size={15} />
              0163 6259023
            </a>
            <a
              href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-150 hover:bg-white/15 active:scale-95"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
