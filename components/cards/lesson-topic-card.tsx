import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

export interface LessonTopicCardProps {
  title: string;
  description: string;
  moduleLabel?: string;
  className?: string;
  onView?: () => void;
}

export function LessonTopicCard({
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleLabel = "Module 5",
  className = "",
  onView,
}: LessonTopicCardProps) {
  return (
    <div
      className={`group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="mb-3">
          <Badge variant="lesson">LESSON</Badge>
        </div>

        <h3 className="text-[17px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-[14px] text-[#64748B] leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9] text-[13px]">
        <span className="text-[#64748B] font-medium">{moduleLabel}</span>

        <button
          onClick={onView}
          className="inline-flex items-center gap-1 font-medium text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer select-none"
        >
          <span>View lesson</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
