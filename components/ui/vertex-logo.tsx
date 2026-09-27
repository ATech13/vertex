import React from "react";

interface VertexLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function VertexLogo({
  className = "",
  size = "md",
  showText = true,
}: VertexLogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Vertex Orange Shield / Inverted Prism */}
          <path
            d="M3 6L18 32L33 6H25L18 20L11 6H3Z"
            fill="#F97316"
          />
          <path
            d="M13 6H23L18 15L13 6Z"
            fill="#FB923C"
          />
        </svg>
      </div>
      {showText && (
        <span
          className={`font-semibold tracking-tight text-[#0F172A] ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Vertex
        </span>
      )}
    </div>
  );
}
