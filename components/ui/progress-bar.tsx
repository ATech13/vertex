import React from "react";

export interface ProgressBarProps {
  value: number; // 0 to 100
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressBar({
  value,
  showLabel = true,
  label,
  className = "",
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`flex items-center gap-4 w-full select-none ${className}`}>
      <div className="relative flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F97316] rounded-full transition-all duration-300"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[14px] font-medium text-[#0F172A] whitespace-nowrap">
          {label ?? `${clampedValue}% complete`}
        </span>
      )}
    </div>
  );
}
