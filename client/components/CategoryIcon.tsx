interface CategoryIconProps {
  type: "leather-ball" | "tennis-scoop";
  className?: string;
}

export const CategoryIcon = ({ type, className = "w-32 h-32" }: CategoryIconProps) => {
  if (type === "leather-ball") {
    return (
      <svg
        viewBox="0 0 200 320"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bat handle (grip) */}
        <rect x="80" y="210" width="40" height="100" rx="10" fill="#3d3d3d" stroke="#1a1a1a" strokeWidth="1.5" />

        {/* Handle grip texture */}
        <line x1="85" y1="230" x2="115" y2="230" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
        <line x1="85" y1="250" x2="115" y2="250" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
        <line x1="85" y1="270" x2="115" y2="270" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />

        {/* Bat splice (transition area) */}
        <path
          d="M 75 210 Q 75 190 85 180 L 115 180 Q 125 190 125 210"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />

        {/* Cricket bat blade */}
        <path
          d="M 60 180 L 50 40 Q 50 20 100 20 Q 150 20 150 40 L 140 180 Z"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth="2"
        />

        {/* Bat blade edge shading */}
        <line x1="58" y1="180" x2="50" y2="40" stroke="#ffffff" strokeWidth="2" opacity="0.2" />

        {/* Wood grain highlight on blade */}
        <path
          d="M 90 60 Q 95 100 98 180"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Leather cricket ball - red with white seam */}
        <circle cx="160" cy="100" r="32" fill="#cc2828" stroke="#1a1a1a" strokeWidth="2" />

        {/* Ball leather seam detail */}
        <path
          d="M 135 85 Q 160 75 185 85"
          stroke="#ffffff"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <path
          d="M 135 115 Q 160 125 185 115"
          stroke="#ffffff"
          strokeWidth="2.5"
          opacity="0.85"
        />

        {/* Ball subtle shadow */}
        <circle cx="160" cy="100" r="32" fill="none" stroke="#000000" strokeWidth="1" opacity="0.1" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bat handle (grip) */}
      <rect x="80" y="210" width="40" height="100" rx="10" fill="#3d3d3d" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Handle grip texture */}
      <line x1="85" y1="230" x2="115" y2="230" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
      <line x1="85" y1="250" x2="115" y2="250" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
      <line x1="85" y1="270" x2="115" y2="270" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />

      {/* Bat splice (transition area) */}
      <path
        d="M 75 210 Q 75 190 85 180 L 115 180 Q 125 190 125 210"
        fill="#2a2a2a"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />

      {/* Cricket bat blade with scoop design */}
      <path
        d="M 60 180 L 50 50 Q 50 20 100 20 Q 150 20 150 50 L 140 180 Z"
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />

      {/* Scoop curve - visible on back of blade */}
      <path
        d="M 70 160 Q 100 130 130 160"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.25"
      />

      {/* Wood grain highlight on blade */}
      <path
        d="M 90 50 Q 95 110 98 180"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Tennis ball - yellow-green */}
      <circle cx="160" cy="95" r="30" fill="#e8f700" stroke="#1a1a1a" strokeWidth="2" />

      {/* Tennis ball curved seam lines */}
      <path
        d="M 138 80 Q 160 70 182 80"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M 138 110 Q 160 120 182 110"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Ball shadow/depth */}
      <circle cx="160" cy="95" r="30" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
};
