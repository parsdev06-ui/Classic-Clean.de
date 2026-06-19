/**
 * FAQSection – Classic-Clean V2
 * Design: Modernes Accordion, klar, mobile-optimiert
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useInView } from "../hooks/useInView";

const faqs = [
  {
    question: "In welchen Regionen ist Classic-Clean tätig?",
    answer:
      "Classic-Clean ist in Berlin und Brandenburg tätig – in einem Umkreis von ca. 50 km. Dazu gehören unter anderem Berlin, Potsdam, Teltow, Ludwigsfelde, Oranienburg und Bernau. Bei Unsicherheiten sprechen Sie uns gerne direkt an.",
  },
  {
    question: "Welche Unternehmen betreut Classic-Clean?",
    answer:
      "Wir betreuen Büros, Kanzleien, Gewerbeflächen, Altenheime und Hausverwaltungen. Unser Fokus liegt ausschließlich auf dem B2B-Bereich – also auf Unternehmen und Einrichtungen, nicht auf Privathaushalten.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot?",
    answer:
      "Nach Ihrem Erstkontakt melden wir uns schnellstmöglich zurück. In der Regel erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot – abgestimmt auf Ihre Flächen und Anforderungen.",
  },
  {
    question: "Gibt es eine kostenlose Erstberatung?",
    answer:
      "Ja. Die Erstberatung ist vollständig kostenlos und unverbindlich. Wir besprechen Ihre Anforderungen, besichtigen bei Bedarf die Flächen und erstellen ein individuelles Reinigungskonzept – ohne versteckte Kosten.",
  },
  {
    question: "Können individuelle Reinigungskonzepte erstellt werden?",
    answer:
      "Ja, das ist unser Standard. Jedes Unternehmen hat andere Anforderungen – deshalb erstellen wir für jeden Kunden ein maßgeschneidertes Reinigungskonzept mit individuellen Reinigungsintervallen, Zeiten und Leistungsumfang.",
  },
  {
    question: "Bietet Classic-Clean regelmäßige Unterhaltsreinigung an?",
    answer:
      "Ja. Unterhaltsreinigung ist eine unserer Kernleistungen. Wir betreuen Ihre Flächen regelmäßig – täglich, wöchentlich oder nach Ihrem Wunschintervall – und sorgen für dauerhaft hohe Hygienestandards.",
  },
  {
    question: "Wie kann ich Kontakt aufnehmen?",
    answer:
      "Sie erreichen uns telefonisch unter 0163 6259023, per E-Mail an Service-Classic-clean@hotmail.com oder direkt über WhatsApp. Wir sind Montag bis Freitag von 09:00 bis 15:00 Uhr erreichbar und melden uns schnellstmöglich zurück.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b last:border-b-0 transition-colors duration-150"
      style={{ borderColor: "#E5E7EB" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-base leading-snug transition-colors duration-150 group-hover:text-blue-600"
          style={{ color: isOpen ? "#2563EB" : "#102A43" }}
        >
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen ? "rgba(37, 99, 235, 0.1)" : "#F3F4F6",
            color: isOpen ? "#2563EB" : "#6B7280",
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="faq" className="cc-section" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <span className="cc-tag mb-4 inline-flex">FAQ</span>
            <h2 className="cc-headline mb-5">
              Häufig gestellte Fragen.
            </h2>
            <p className="cc-subheadline mb-6">
              Sie haben weitere Fragen? Wir sind gerne persönlich für Sie da.
            </p>
            <a
              href="tel:01636259023"
              className="cc-btn-secondary inline-flex"
            >
              Direkt anrufen
            </a>
          </div>

          {/* Right: Accordion */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 px-6 py-2"
            style={{ boxShadow: "0 2px 12px rgba(16,42,67,0.05)" }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
