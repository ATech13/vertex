import React from "react";
import { CheckCircle2, Play, Lock } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  className?: string;
  showLabel?: boolean;
}

export function StatusIndicator({
  status,
  label,
  className = "",
  showLabel = true,
}: StatusIndicatorProps) {
  const configs = {
    "in-progress": {
      defaultLabel: "In Progress",
      textColor: "text-[#0F172A]",
      icon: (
        <span className="relative flex items-center justify-center w-4 h-4">
          <svg className="w-4 h-4 -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="#FED7AA"
              strokeWidth="2.5"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="#F97316"
              strokeWidth="2.5"
              strokeDasharray="56.5"
              strokeDashoffset="28"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ),
    },
    completed: {
      defaultLabel: "Completed",
      textColor: "text-[#0F172A]",
      icon: (
        <CheckCircle2 className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
      ),
    },
    "now-playing": {
      defaultLabel: "Now Playing",
      textColor: "text-[#0F172A]",
      icon: (
        <span className="flex items-center justify-center w-4 h-4 bg-[#F97316] rounded-full text-white">
          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
        </span>
      ),
    },
    locked: {
      defaultLabel: "Locked",
      textColor: "text-[#0F172A]",
      icon: <Lock className="w-4 h-4 text-[#64748B] stroke-[2]" />,
    },
  }[status];

  return (
    <div
      className={`inline-flex items-center gap-2 select-none text-[13px] font-medium ${className}`}
    >
      {configs.icon}
      {showLabel && (
        <span className={configs.textColor}>
          {label ?? configs.defaultLabel}
        </span>
      )}
    </div>
  );
}
