interface CategoryIconProps {
  type: "leather-ball" | "tennis-scoop";
  className?: string;
}

export const CategoryIcon = ({ type, className = "w-32 h-32" }: CategoryIconProps) => {
  if (type === "leather-ball") {
    return (
      <svg
        viewBox="0 0 200 300"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bat handle */}
        <rect x="85" y="180" width="30" height="100" rx="15" fill="#1a1a1a" />
        
        {/* Bat blade - wider upper section */}
        <path
          d="M 70 180 Q 50 120 50 60 Q 50 20 100 20 Q 150 20 150 60 Q 150 120 130 180 Z"
          fill="#2a2a2a"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        
        {/* Bat blade highlights */}
        <path
          d="M 75 50 Q 80 80 85 150"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.4"
        />
        
        {/* Cricket ball */}
        <circle cx="140" cy="100" r="28" fill="#d32f2f" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Ball seams */}
        <path
          d="M 115 95 Q 140 85 165 95"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 115 105 Q 140 115 165 105"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Motion lines */}
        <line x1="165" y1="90" x2="185" y2="85" stroke="#1a1a1a" strokeWidth="2" opacity="0.6" />
        <line x1="170" y1="105" x2="190" y2="110" stroke="#1a1a1a" strokeWidth="2" opacity="0.6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bat handle */}
      <rect x="85" y="160" width="30" height="120" rx="15" fill="#1a1a1a" />
      
      {/* Bat blade - with scoop design */}
      <path
        d="M 65 160 Q 45 100 45 50 Q 45 15 100 15 Q 155 15 155 50 Q 155 100 135 160"
        fill="#2a2a2a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      
      {/* Scoop curve - inner detail */}
      <path
        d="M 75 140 Q 100 120 125 140"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.3"
      />
      
      {/* Bat blade center highlight */}
      <path
        d="M 90 50 Q 95 90 98 150"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.4"
      />
      
      {/* Tennis ball */}
      <circle cx="145" cy="85" r="25" fill="#ccff00" stroke="#1a1a1a" strokeWidth="2" />
      
      {/* Tennis ball curve details */}
      <path
        d="M 130 70 Q 145 75 160 70"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M 130 100 Q 145 95 160 100"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        opacity="0.5"
      />
      
      {/* Motion lines */}
      <line x1="165" y1="75" x2="185" y2="65" stroke="#1a1a1a" strokeWidth="2" opacity="0.6" />
      <line x1="170" y1="95" x2="188" y2="105" stroke="#1a1a1a" strokeWidth="2" opacity="0.6" />
    </svg>
  );
};
