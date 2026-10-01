

export const EchoCardIllustration = () => {
  return (
    <div className="relative w-64 h-40 drop-shadow-xl">
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Card Base */}
        <rect
          width="320"
          height="200"
          rx="24"
          fill="url(#card-gradient)"
          className="shadow-2xl"
        />

        {/* Glass Overlay (Reflection) */}
        <rect
          x="2"
          y="2"
          width="316"
          height="196"
          rx="22"
          fill="url(#glass-gradient)"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
        />

        {/* Abstract Identity Wave/Lines */}
        <path
          d="M 40 160 Q 80 120 160 140 T 280 100"
          stroke="url(#line-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-80"
        />
        <path
          d="M 60 170 Q 100 140 180 160 T 300 130"
          stroke="url(#line-gradient-2)"
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-50"
        />

        {/* Chip / Tech detail */}
        <rect
          x="40"
          y="80"
          width="40"
          height="32"
          rx="6"
          fill="rgba(255,255,255,0.25)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
        <circle cx="50" cy="88" r="2" fill="white" className="opacity-70" />
        <circle cx="50" cy="96" r="2" fill="white" className="opacity-70" />
        <circle cx="50" cy="104" r="2" fill="white" className="opacity-70" />
        <circle cx="70" cy="88" r="2" fill="white" className="opacity-70" />
        <circle cx="70" cy="96" r="2" fill="white" className="opacity-70" />
        <circle cx="70" cy="104" r="2" fill="white" className="opacity-70" />

        {/* Modern "Echo" signal or profile placeholder */}
        <circle cx="260" cy="60" r="20" fill="rgba(255,255,255,0.2)" />
        <circle cx="260" cy="60" r="12" fill="rgba(255,255,255,0.4)" />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="card-gradient"
            x1="0"
            y1="0"
            x2="320"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#FF8CC8" />
          </linearGradient>

          <linearGradient
            id="glass-gradient"
            x1="0"
            y1="0"
            x2="320"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient
            id="line-gradient"
            x1="40"
            y1="160"
            x2="280"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.9" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient
            id="line-gradient-2"
            x1="60"
            y1="170"
            x2="300"
            y2="130"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
