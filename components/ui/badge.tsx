import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "video" | "lesson" | "popular" | "neutral";
  children: React.ReactNode;
}

export function Badge({
  variant = "video",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    video:
      "bg-[#FFEEE5] text-[#F97316] font-bold text-[11px] tracking-wider uppercase px-2 py-0.5 rounded-[6px]",
    lesson:
      "bg-[#EFF6FF] text-[#2563EB] font-bold text-[11px] tracking-wider uppercase px-2 py-0.5 rounded-[6px]",
    popular:
      "bg-[#FFEEE5] text-[#F97316] font-bold text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[#FED7AA]",
    neutral:
      "bg-[#F1F5F9] text-[#64748B] font-semibold text-[11px] tracking-wider uppercase px-2 py-0.5 rounded-[6px]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center justify-center select-none ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
