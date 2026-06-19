/**
 * MobileStickyCTA – Classic-Clean V2
 * Design: Nur auf Mobile sichtbar, hochwertig, nicht störend
 * 3 Buttons: Anrufen, WhatsApp, E-Mail
 */
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(229, 231, 235, 0.8)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        boxShadow: "0 -4px 24px rgba(16, 42, 67, 0.1)",
      }}
    >
      <div className="flex items-stretch gap-0 px-3 py-3">
        {/* Call */}
        <a
          href="tel:01636259023"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl transition-all duration-150 active:scale-95"
          style={{ background: "rgba(37, 99, 235, 0.08)" }}
          aria-label="Jetzt anrufen"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "#2563EB" }}
          >
            <Phone size={16} className="text-white" />
          </div>
          <span className="text-xs font-semibold" style={{ color: "#2563EB" }}>
            Anrufen
          </span>
        </a>

        <div className="w-px mx-2" style={{ background: "#E5E7EB" }} />

        {/* WhatsApp */}
        <a
          href="https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl transition-all duration-150 active:scale-95"
          style={{ background: "rgba(37, 211, 102, 0.08)" }}
          aria-label="WhatsApp schreiben"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "#25D366" }}
          >
            <MessageCircle size={16} className="text-white" />
          </div>
          <span className="text-xs font-semibold" style={{ color: "#16a34a" }}>
            WhatsApp
          </span>
        </a>

        <div className="w-px mx-2" style={{ background: "#E5E7EB" }} />

        {/* Email */}
        <a
          href="mailto:Service-Classic-clean@hotmail.com"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl transition-all duration-150 active:scale-95"
          style={{ background: "rgba(16, 185, 129, 0.08)" }}
          aria-label="E-Mail senden"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "#10B981" }}
          >
            <Mail size={16} className="text-white" />
          </div>
          <span className="text-xs font-semibold" style={{ color: "#10B981" }}>
            E-Mail
          </span>
        </a>
      </div>
    </div>
  );
}
