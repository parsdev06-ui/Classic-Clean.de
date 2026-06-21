/**
 * CurvedWordLoop – Classic-Clean V2
 * Continuous curved text animation with emerald separators
 * Loops left-to-right, respects prefers-reduced-motion
 */

const CurvedWordLoop = ({
  text = "SAUBER ✦ PERSÖNLICH ✦ ZUVERLÄSSIG ✦ FLEXIBEL ✦",
}: {
  text?: string;
} = {}) => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "clamp(5rem, 7vw, 9.375rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 1200 400"
        className="w-full h-full"
        style={{
          pointerEvents: "none",
          overflow: "visible",
        }}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Subtle background glow */}
        <defs>
          <style>{`
            @keyframes cc-loop-scroll {
              0% {
                startOffset: 0%;
              }
              100% {
                startOffset: 100%;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .cc-text-loop {
                animation: none !important;
              }
            }

            .cc-text-loop {
              font-size: 36px;
              font-weight: 700;
              letter-spacing: 0.08em;
              fill: white;
              opacity: 0.5;
              font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
              animation: cc-loop-scroll 28s linear infinite;
            }

            .cc-text-loop-bright {
              opacity: 0.8;
              transition: opacity 0.3s ease;
            }

            .cc-separator {
              fill: #6EE7B7;
            }
          `}</style>

          <radialGradient
            id="curveGradient"
            cx="50%"
            cy="50%"
            r="70%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.12)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
          </radialGradient>

          {/* Curved path for text */}
          <path
            id="curvePath"
            d="M 0,200 Q 300,100 600,100 T 1200,200"
            fill="none"
            strokeWidth="0"
          />
        </defs>

        {/* Subtle ambient glow */}
        <ellipse
          cx="600"
          cy="200"
          rx="500"
          ry="200"
          fill="url(#curveGradient)"
        />

        {/* Primary text loop - first instance */}
        <text
          className="cc-text-loop"
          startOffset="0%"
          textAnchor="start"
        >
          <textPath href="#curvePath" startOffset="0%">
            {text}
          </textPath>
        </text>

        {/* Secondary text loop - seamless continuation */}
        <text
          className="cc-text-loop"
          startOffset="0%"
          textAnchor="start"
        >
          <textPath href="#curvePath" startOffset="100%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Gradient mask for fade effect at edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(
            90deg,
            rgba(6, 21, 34, 1) 0%,
            rgba(6, 21, 34, 0) 15%,
            rgba(6, 21, 34, 0) 85%,
            rgba(6, 21, 34, 1) 100%
          )`,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default CurvedWordLoop;
