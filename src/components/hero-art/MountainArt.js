// Hand-inked mountain scene
const pines = [[28, 404], [52, 394], [470, 366], [497, 394]]; // [x, baseY]

function MountainArt() {
  return (
    <svg
      className="mountain-art"
      viewBox="0 0 520 420"
      role="img"
      aria-label="Illustration of layered mountains with a winding trail up to a summit flag"
    >
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CBD9E0" />
          <stop offset="1" stopColor="#F6E7A8" />
        </linearGradient>
        <filter id="ink-wobble" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect width="520" height="420" fill="url(#sky-grad)" />

      <g filter="url(#ink-wobble)" stroke="#2E353B" strokeLinejoin="round" strokeLinecap="round">
        {/* sun */}
        <circle cx="385" cy="118" r="44" fill="#e6b800" strokeWidth="2" />
        <circle cx="385" cy="118" r="55" fill="none" stroke="#e6b800" strokeWidth="2" strokeDasharray="4 6" />

        {/* clouds + birds */}
        <g fill="none" stroke="#567A8A" strokeWidth="2.5" opacity="0.55">
          <path d="M40 120 q14 -16 30 -2 q14 -12 28 4" />
          <path d="M110 168 q12 -12 24 0 q12 -9 22 3" />
        </g>
        <g fill="none" strokeWidth="2">
          <path d="M95 70 q7 -9 14 0 q7 -9 14 0" />
          <path d="M140 45 q6 -8 12 0 q6 -8 12 0" />
        </g>

        {/* far ridge */}
        <path
          d="M-10 270 L60 215 L105 245 L170 170 L240 250 L300 205 L360 255 L430 195 L530 260 L530 430 L-10 430 Z"
          fill="#A3B6C1"
          strokeWidth="2"
        />

        {/* mid ridge */}
        <path
          d="M-10 320 L90 250 L150 290 L235 215 L320 300 L395 245 L470 295 L530 270 L530 430 L-10 430 Z"
          fill="#567A8A"
          strokeWidth="2"
        />
        <path d="M100 268 l8 10 M92 276 l9 11 M112 262 l7 9 M70 286 l9 11" fill="none" strokeWidth="1.6" opacity="0.35" />

        {/* front mountain */}
        <path
          d="M-10 430 L-10 420 L120 300 L190 335 L275 130 L365 300 L420 270 L540 400 L540 430 Z"
          fill="#3E5561"
          strokeWidth="2.5"
        />
        <path d="M275 130 L365 300 L292 300 L283 215 Z" fill="#2E353B" stroke="none" opacity="0.35" />
        <path d="M150 330 l10 14 M162 322 l10 14 M174 330 l9 12" fill="none" stroke="#A3B6C1" strokeWidth="1.6" opacity="0.5" />

        {/* snow cap */}
        <path d="M275 130 L250 190 L262 182 L275 198 L290 183 L307 190 Z" fill="#F5F5F5" strokeWidth="2" />

        {/* trail */}
        <path
          d="M120 412 C 200 404, 300 396, 292 360 S 205 340, 240 308 S 312 292, 272 258 S 242 230, 270 198 S 272 162, 275 140"
          fill="none"
          stroke="#e6b800"
          strokeWidth="3"
          strokeDasharray="2 7"
        />

        {/* summit flag */}
        <path d="M275 132 L275 106" strokeWidth="2.5" fill="none" />
        <path d="M275 106 L296 113 L275 121 Z" fill="#e6b800" strokeWidth="1.5" />

        {/* pines */}
        <g fill="#2E353B" strokeWidth="1">
          {pines.map(([x, y]) => (
            <path key={x} d={`M${x} ${y - 24} L${x - 10} ${y} L${x + 10} ${y} Z`} />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default MountainArt;