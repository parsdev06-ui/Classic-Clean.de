/**
 * CurvedWordLoop – Classic-Clean V2
 * CSS-based horizontal text loop animation
 * Respects prefers-reduced-motion
 */

const CurvedWordLoop = ({
  text = "SAUBER ✦ PERSÖNLICH ✦ ZUVERLÄSSIG ✦ FLEXIBEL ✦",
}: {
  text?: string;
} = {}) => {
  return (
    <div
      className="relative w-full overflow-hidden py-6 md:py-8"
      style={{
        background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.08), transparent 68%)",
      }}
    >
      <style>{`
        @keyframes cc-loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-text-loop-container {
            animation: none !important;
          }
        }

        .cc-text-loop-container {
          display: flex;
          white-space: nowrap;
          animation: cc-loop-scroll 28s linear infinite;
          gap: 2rem;
        }

        .cc-text-item {
          flex-shrink: 0;
          font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="cc-text-loop-container">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="cc-text-item">
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Left fade gradient */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: "5%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(6, 21, 34, 1) 0%, rgba(6, 21, 34, 0) 100%)",
          zIndex: 10,
        }}
      />

      {/* Right fade gradient */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "5%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(6, 21, 34, 0) 0%, rgba(6, 21, 34, 1) 100%)",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default CurvedWordLoop;
