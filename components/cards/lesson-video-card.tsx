import React from "react";
import { Play } from "lucide-react";
import { Badge } from "../ui/badge";

export interface LessonVideoCardProps {
  title: string;
  description: string;
  lessonLabel?: string;
  timestamp?: string;
  className?: string;
  onWatch?: () => void;
}

export function LessonVideoCard({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonLabel = "Lesson 5.1",
  timestamp = "12:45",
  className = "",
  onWatch,
}: LessonVideoCardProps) {
  return (
    <div
      className={`group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="mb-3">
          <Badge variant="video">VIDEO</Badge>
        </div>

        <h3 className="text-[17px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-[14px] text-[#64748B] leading-relaxed line-clamp-2 mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9] text-[13px]">
        <span className="text-[#64748B] font-medium">
          {lessonLabel} · {timestamp}
        </span>

        <button
          onClick={onWatch}
          className="inline-flex items-center gap-1.5 font-medium text-[#F97316] hover:text-[#EA580C] transition-colors cursor-pointer select-none"
        >
          <span className="w-5 h-5 rounded-full bg-[#FFEEE5] flex items-center justify-center text-[#F97316]">
            <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
          </span>
          <span>Watch from {timestamp}</span>
        </button>
      </div>
    </div>
  );
}
