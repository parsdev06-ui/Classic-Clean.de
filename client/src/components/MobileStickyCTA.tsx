/**
 * MobileStickyCTA – Classic-Clean V2
 * Safari-optimized: IntersectionObserver + scroll behavior
 * Smart show/hide: Hidden when primary CTA is visible, shows when scrolled past
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
  const [isCTAVisible, setIsCTAVisible] = useState(true);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const ctaObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // IntersectionObserver for primary CTA visibility
    const initCTAObserver = () => {
      const primaryCTAButton = document.querySelector(
        'button:has(svg[class*="chevron"])'
      ) || document.querySelector('section:first-of-type button');

      if (primaryCTAButton) {
        ctaObserverRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setIsCTAVisible(entry.isIntersecting);
            });
          },
          { threshold: 0.2 }
        );

        ctaObserverRef.current.observe(primaryCTAButton);
      }
    };

    if (!prefersReducedMotion) {
      initCTAObserver();
    }

    // Scroll behavior: hide when scrolling, show after stop
    const getScrollY = () => {
      return document.documentElement.scrollTop || window.scrollY || 0;
    };

    const handleScrollEnd = () => {
      const currentScrollY = getScrollY();

      // If at top of page, show sticky CTA when primary CTA not visible
      if (currentScrollY < 40) {
        setIsHidden(isCTAVisible);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // After 180-220ms: reappear after scroll stops
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      setIsHidden(isCTAVisible);
      lastScrollYRef.current = currentScrollY;
    };

    const handleScroll = () => {
      const currentScrollY = getScrollY();
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);

      if (currentScrollY < 40) {
        setIsHidden(isCTAVisible);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Show sticky CTA while scrolling if primary CTA not visible
      if (scrollDelta > 15 && !isCTAVisible) {
        setIsHidden(true);

        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current);
        }

        // After 180-220ms: slide back up
        hideTimeoutRef.current = window.setTimeout(() => {
          setIsHidden(false);
        }, 200);
      }

      lastScrollYRef.current = currentScrollY;
    };

    const supportsScrollend = "onscrollend" in window;

    if (supportsScrollend) {
      window.addEventListener("scrollend", handleScrollEnd, { passive: true });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (supportsScrollend) {
        window.removeEventListener("scrollend", handleScrollEnd);
      }
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      if (ctaObserverRef.current) {
        ctaObserverRef.current.disconnect();
      }
    };
  }, [isCTAVisible]);

  const handleTouchStart = (index: number) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTouchedIndex(null);
  };

  // Hide sticky CTA when primary CTA is visible
  const shouldHideCompletely = isCTAVisible;

  const safeAreaPadding =
    "max(env(safe-area-inset-bottom), 0.75rem)";

  return (
    <nav
      aria-label="Schnelle Kontaktmöglichkeiten"
      className="md:hidden"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        borderTop: "1px solid rgba(203, 213, 225, 0.8)",
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 -16px 40px rgba(15, 23, 42, 0.08)",
        transition: shouldHideCompletely
          ? "opacity 300ms ease-out, transform 300ms ease-out, visibility 300ms ease-out"
          : isHidden
            ? "opacity 300ms ease-out, transform 300ms ease-out"
            : "opacity 300ms ease-out, transform 300ms ease-out",
        opacity: shouldHideCompletely ? 0 : isHidden ? 0 : 1,
        transform: shouldHideCompletely
          ? "translateY(100%)"
          : isHidden
            ? "translateY(100%)"
            : "translateY(0)",
        visibility: shouldHideCompletely ? "hidden" : "visible",
        pointerEvents: shouldHideCompletely ? "none" : "auto",
        paddingBottom: safeAreaPadding,
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
      } as React.CSSProperties}
    >
      <div style={{ display: "flex", alignItems: "stretch", gap: "0.5rem", padding: "0.75rem" }}>
        {contactActions.map((action, idx) => {
          const Icon = action.icon;
          const isPressed = touchedIndex === idx;

          const wrapperClasses = action.wrapperClass.split(" ");
          const bgColor = wrapperClasses.find((c) => c.startsWith("bg-"));
          const textColor = wrapperClasses.find((c) => c.startsWith("text-"));

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
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
                borderRadius: "1rem",
                padding: "0.5rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                transition: "all 150ms ease-out",
                transform: isPressed ? "scale(0.97)" : "scale(1)",
                opacity: isPressed ? 0.8 : 1,
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
              }}
              className={action.wrapperClass}
            >
              <span
                style={{
                  display: "flex",
                  width: "2.25rem",
                  height: "2.25rem",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
                className={action.iconClass}
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
