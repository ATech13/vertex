import React from "react";
import { FileText, ArrowUpRight } from "lucide-react";

export interface ResourceCardProps {
  title: string;
  description: string;
  type?: string;
  fileSize?: string;
  className?: string;
  onDownload?: () => void;
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  type = "PDF",
  fileSize = "1.2 MB",
  className = "",
  onDownload,
}: ResourceCardProps) {
  return (
    <div
      onClick={onDownload}
      className={`group bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-[16px] p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between cursor-pointer ${className}`}
    >
      <div>
        <div className="w-10 h-10 rounded-[10px] bg-[#F1F5F9] text-[#0F172A] flex items-center justify-center mb-4">
          <FileText className="w-5 h-5 text-[#0F172A]" />
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
          {type} · {fileSize}
        </span>

        <span className="text-[#F97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
