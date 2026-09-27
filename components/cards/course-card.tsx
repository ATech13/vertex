import React from "react";
import { BarChart2, Clock, Layers } from "lucide-react";

export interface CourseCardProps {
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modulesCount?: number | string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  icon,
  className = "",
  onClick,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between cursor-pointer ${className}`}
    >
      <div>
        {/* Course Logo / Icon */}
        <div className="w-10 h-10 rounded-[10px] bg-black text-white flex items-center justify-center font-bold text-lg mb-4 select-none">
          {icon ?? "N"}
        </div>

        {/* Title */}
        <h3 className="text-[18px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] text-[#64748B] leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="flex items-center gap-4 text-[13px] text-[#64748B] pt-4 border-t border-[#F1F5F9]">
        <div className="flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>{modulesCount}</span>
        </div>
      </div>
    </div>
  );
}
