/**
 * Footer – Classic-Clean V2
 * Design: Clean, vertrauenswürdig, alle wichtigen Links
 */
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocation } from "wouter";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#warum" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  "Büroreinigung",
  "Gewerbereinigung",
  "Altenheimreinigung",
  "Unterhaltsreinigung",
];

export default function Footer() {
  const [, setLocation] = useLocation();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: "#102A43", color: "white" }}>
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-lg text-white">Classic-Clean</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Professionelle Gebäudereinigung für Unternehmen in Berlin & Brandenburg. Persönlich betreut, flexibel geplant.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:01636259023"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <Phone size={13} />
                0163 6259023
              </a>
              <a
                href="mailto:Service-Classic-clean@hotmail.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <Mail size={13} />
                Service-Classic-clean@hotmail.com
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <MapPin size={13} />
                Berlin & Brandenburg
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-white transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Leistungen
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#leistungen")}
                    className="text-sm hover:text-white transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Jetzt anfragen
            </h4>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Kostenlose Erstberatung – unverbindlich und schnell.
            </p>
            <button
              onClick={() => scrollTo("#kontakt")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-90"
              style={{ background: "#10B981", color: "white" }}
            >
              Anfrage starten
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <span>© {new Date().getFullYear()} Classic-Clean. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <button onClick={() => setLocation("/impressum")} className="hover:text-white transition-colors">Impressum</button>
            <button onClick={() => setLocation("/datenschutz")} className="hover:text-white transition-colors">Datenschutz</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
