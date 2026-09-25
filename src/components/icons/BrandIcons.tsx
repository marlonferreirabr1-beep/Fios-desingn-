import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Real Official Instagram Brand Logo (Official Meta Vector Asset)
 * Enhanced with 3D Embossed Depth, Glass Specular Sheen & Vibrant Luminescence
 */
export const RealInstagramLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  const id = React.useId().replace(/:/g, '');
  return (
    <span className={`inline-flex shrink-0 items-center justify-center relative group/ig ${className}`}>
      {/* 3D Ambient Radiant Glow behind the badge */}
      <span
        className="absolute -inset-1 rounded-2xl opacity-60 group-hover/ig:opacity-100 blur-md transition-all duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(214,36,159,0.5) 0%, rgba(253,89,73,0.3) 60%, transparent 80%)',
        }}
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 shrink-0 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] drop-shadow-[0_0_12px_rgba(214,36,159,0.4)] transition-transform duration-300 group-hover/ig:scale-105"
        aria-label="Instagram Oficial"
      >
        <defs>
          <radialGradient
            id={`ig-grad-${id}`}
            cx="25%"
            cy="108%"
            r="128%"
          >
            <stop offset="0%" stopColor="#ffee55" />
            <stop offset="12%" stopColor="#ffb938" />
            <stop offset="42%" stopColor="#fd3868" />
            <stop offset="68%" stopColor="#d6249f" />
            <stop offset="100%" stopColor="#285AEB" />
          </radialGradient>

          {/* 3D Glass Specular Reflection */}
          <linearGradient id={`ig-specular-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 3D Bottom Bevel Shadow */}
        <rect x="0.5" y="1" width="23" height="23" rx="6.5" fill="#180512" opacity="0.6" />

        {/* Official Rounded Squircle Background */}
        <rect width="24" height="24" rx="6.5" fill={`url(#ig-grad-${id})`} />

        {/* Top Specular Sheen (3D Glass Look) */}
        <path
          d="M0 6.5C0 2.91 2.91 0 6.5 0h11C21.09 0 24 2.91 24 6.5v2L0 15V6.5z"
          fill={`url(#ig-specular-${id})`}
          opacity="0.6"
        />

        {/* Official Camera Glyph */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zM17.2 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5zm10 1.8H7A1.7 1.7 0 0 0 5.3 7v10a1.7 1.7 0 0 0 1.7 1.7h10a1.7 1.7 0 0 0 1.7-1.7V7A1.7 1.7 0 0 0 17 5.3z"
          fill="#ffffff"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}
        />
      </svg>
    </span>
  );
};

/**
 * Real Official WhatsApp Brand Logo (Official Meta Vector Asset)
 * Enhanced with 3D Embossed Depth, Specular Luster & Radiant Emerald Glow
 */
export const RealWhatsAppLogo: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  const id = React.useId().replace(/:/g, '');
  return (
    <span className={`inline-flex shrink-0 items-center justify-center relative group/wa ${className}`}>
      {/* 3D Ambient Radiant Glow behind the badge */}
      <span
        className="absolute -inset-1 rounded-full opacity-65 group-hover/wa:opacity-100 blur-md transition-all duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,211,102,0.6) 0%, rgba(30,190,90,0.3) 65%, transparent 85%)',
        }}
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 175.216 175.552"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 shrink-0 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)] drop-shadow-[0_0_14px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover/wa:scale-105"
        aria-label="WhatsApp Oficial"
      >
        <defs>
          <linearGradient
            id={`wa-grad-${id}`}
            x1="85.915"
            y1="25"
            x2="86.535"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#35f080" />
            <stop offset="45%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#149c46" />
          </linearGradient>

          {/* 3D Bevel Lighting */}
          <linearGradient id={`wa-specular-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 3D Ambient Occlusion Shadow Under Speech Bubble */}
        <path
          fill="rgba(0,0,0,0.4)"
          d="m14.966 163.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          filter="blur(2px)"
        />

        {/* White outer contour / speech bubble border with bottom-left pointer */}
        <path
          fill="#ffffff"
          d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        />

        {/* Official WhatsApp Green speech bubble with tail & 3D Gradient */}
        <path
          fill={`url(#wa-grad-${id})`}
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        />

        {/* 3D Top Dome Highlight Sheen */}
        <path
          fill={`url(#wa-specular-${id})`}
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        />

        {/* Official White Telephone Receiver with Embossed Drop Shadow */}
        <path
          fill="#ffffff"
          fillRule="evenodd"
          d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
          style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.35))' }}
        />
      </svg>
    </span>
  );
};

// Aliases
export const Instagram3DIcon = RealInstagramLogo;
export const WhatsApp3DIcon = RealWhatsAppLogo;
