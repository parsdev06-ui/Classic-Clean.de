/**
 * MobileStickyCTA – Classic-Clean V2
 * iOS Safari optimiert: Safe-Area, Touch-Feedback, Better Scroll-Detection
 * Alle Endgeräte kompatibel: iPhone, Android, Tablets
 */
import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

interface ContactAction {
  label: string;
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<{ size: number; strokeWidth: number }>;
  wrapperClass: string;
  iconClass: string;
  external?: boolean;
}

const contactActions: ContactAction[] = [
  {
    label: "Anrufen",
    href: "tel:01636259023",
    ariaLabel: "Jetzt anrufen",
    icon: Phone,
    wrapperClass: "bg-blue-50 text-blue-600",
    iconClass: "bg-blue-600 text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/491636259023?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen.",
    ariaLabel: "WhatsApp schreiben",
    icon: MessageCircle,
    wrapperClass: "bg-emerald-50 text-emerald-600",
    iconClass: "bg-[#25D366] text-white",
    external: true,
  },
  {
    label: "E-Mail",
    href: "mailto:Service-Classic-clean@hotmail.com",
    ariaLabel: "E-Mail senden",
    icon: Mail,
    wrapperClass: "bg-teal-50 text-teal-600",
    iconClass: "bg-teal-500 text-white",
  },
];

export default function MobileStickyCTA() {
  const [isHidden, setIsHidden] = useState(false);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);

      // Bei sehr wenig Scroll oben nicht ausblenden (Threshold: 40px)
      if (currentScrollY < 40) {
        setIsHidden(false);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Nur ausblenden bei echte Scrollbewegung > 5px (verhindert nervöse Animation)
      if (scrollDelta > 5) {
        isScrollingRef.current = true;
        setIsHidden(true);

        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
        }

        // Nach 180ms ohne Scrollbewegung: wieder einblenden
        scrollTimeoutRef.current = window.setTimeout(() => {
          setIsHidden(false);
          isScrollingRef.current = false;
        }, 180);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleTouchStart = (index: number) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTouchedIndex(null);
  };

  return (
    <nav
      aria-label="Schnelle Kontaktmöglichkeiten"
      className={[
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "border-t border-slate-200/80 bg-white/92 backdrop-blur-xl",
        "shadow-[0_-16px_40px_rgba(15,23,42,0.08)]",
        "transition-all duration-300 ease-out will-change-transform",
        isHidden
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
      ].join(" ")}
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)",
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
      } as React.CSSProperties}
    >
      <div className="flex items-stretch gap-2 px-3 py-3">
        {contactActions.map((action, idx) => {
          const Icon = action.icon;
          const isPressed = touchedIndex === idx;

          return (
            <a
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              onTouchStart={() => handleTouchStart(idx)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              className={[
                "flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5",
                "text-xs font-semibold",
                "transition-all duration-150 ease-out",
                "active:scale-[0.97] active:opacity-80",
                isPressed && "scale-[0.97] opacity-80",
                action.wrapperClass,
              ].join(" ")}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-xl",
                  "shadow-sm",
                  action.iconClass,
                ].join(" ")}
              >
                <Icon size={16} strokeWidth={2} />
              </span>
              <span>{action.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
