/**
 * ContactSection – Classic-Clean V2
 * Design: Starke finale Kontaktsektion, 3 CTAs, Kontaktformular mit echtem Backend
 * Telefon, WhatsApp, E-Mail sofort sichtbar
 * Formular sendet Anfrage per tRPC an den Inhaber
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, MapPin, ChevronRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { trpc } from "@/lib/trpc";

export default function ContactSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const isLoading = submitMutation.isPending;
  const hasError = submitMutation.isError;

  return (
    <section id="kontakt" className="cc-section" style={{ background: "white" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="cc-tag mb-4 inline-flex">Kontakt</span>
          <h2 className="cc-headline mb-4">
            Bereit für saubere Arbeitsflächen?
          </h2>
          <p className="cc-subheadline">
            Fragen Sie jetzt kostenlos und unverbindlich an. Wir melden uns schnellstmöglich zurück.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:01636259023"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37, 99, 235, 0.1)" }}
                >
                  <Phone size={18} style={{ color: "#2563EB" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#6B7280" }}>
                    Jetzt anrufen
                  </div>
                  <div className="font-bold text-base" style={{ color: "#102A43" }}>
                    0163 6259023
                  </div>
                </div>
                <ChevronRight size={16} style={{ color: "#9CA3AF" }} className="group-hover:text-blue-500 transition-colors" />
              </a>

              <a
                href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-green-50 hover:border-green-200 transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37, 211, 102, 0.1)" }}
                >
                  <MessageCircle size={18} style={{ color: "#25D366" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#6B7280" }}>
                    WhatsApp schreiben
                  </div>
                  <div className="font-bold text-base" style={{ color: "#102A43" }}>
                    Schnelle Nachricht senden
                  </div>
                </div>
                <ChevronRight size={16} style={{ color: "#9CA3AF" }} className="group-hover:text-green-500 transition-colors" />
              </a>

              <a
                href="mailto:Service-Classic-clean@hotmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(16, 185, 129, 0.1)" }}
                >
                  <Mail size={18} style={{ color: "#10B981" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#6B7280" }}>
                    E-Mail senden
                  </div>
                  <div className="font-bold text-sm truncate" style={{ color: "#102A43" }}>
                    Service-Classic-clean@hotmail.com
                  </div>
                </div>
                <ChevronRight size={16} style={{ color: "#9CA3AF" }} className="group-hover:text-emerald-500 transition-colors" />
              </a>
            </div>

            {/* Info */}
            <div
              className="rounded-xl p-5 border"
              style={{ background: "#F8FAFC", borderColor: "#E5E7EB" }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Clock size={15} style={{ color: "#10B981" }} />
                  <div>
                    <span className="text-sm font-medium" style={{ color: "#102A43" }}>
                      Mo–Fr, 09:00–15:00 Uhr
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={15} style={{ color: "#10B981" }} />
                  <span className="text-sm font-medium" style={{ color: "#102A43" }}>
                    Berlin & Brandenburg, ca. 50 km Umkreis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={15} style={{ color: "#10B981" }} />
                  <span className="text-sm font-medium" style={{ color: "#102A43" }}>
                    Kostenlose Erstberatung – unverbindlich
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div
              className="rounded-xl p-6 sm:p-7 border"
              style={{
                background: "white",
                borderColor: "#E5E7EB",
                boxShadow: "0 4px 20px rgba(16,42,67,0.06)",
              }}
            >
              <h3
                className="font-bold text-xl mb-6"
                style={{ color: "#102A43", letterSpacing: "-0.02em" }}
              >
                Anfrage senden
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(16, 185, 129, 0.1)" }}
                  >
                    <CheckCircle2 size={28} style={{ color: "#10B981" }} />
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: "#102A43" }}>
                    Anfrage gesendet!
                  </h4>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    Wir melden uns schnellstmöglich bei Ihnen zurück.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-medium underline"
                    style={{ color: "#2563EB" }}
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#374151" }}
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Ihr Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isLoading}
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 disabled:opacity-60"
                        style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#374151" }}
                      >
                        Unternehmen *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        placeholder="Ihr Unternehmen"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        disabled={isLoading}
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 disabled:opacity-60"
                        style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#374151" }}
                      >
                        Telefon *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Ihre Telefonnummer"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={isLoading}
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 disabled:opacity-60"
                        style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#374151" }}
                      >
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Ihre E-Mail-Adresse"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isLoading}
                        className="w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 disabled:opacity-60"
                        style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihre Anforderungen..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isLoading}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 resize-none disabled:opacity-60"
                      style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                    />
                  </div>

                  {/* Error message */}
                  {hasError && (
                    <div
                      className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm"
                      style={{ background: "rgba(239, 68, 68, 0.08)", color: "#DC2626", border: "1px solid rgba(239, 68, 68, 0.2)" }}
                    >
                      <AlertCircle size={15} />
                      <span>
                        Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="cc-btn-primary w-full justify-center mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <ChevronRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "#9CA3AF" }}>
                    Kostenlos & unverbindlich · Antwort innerhalb von 24 Stunden
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
