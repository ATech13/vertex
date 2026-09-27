import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className = "",
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={`inline-flex items-center gap-1.5 select-none ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Pages: 1, 2, 3, ..., 8 */}
      {[1, 2, 3].map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-[8px] text-[14px] font-medium transition-colors ${
              isActive
                ? "border border-[#F97316] bg-[#FFEEE5] text-[#F97316] font-semibold"
                : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <span className="w-8 h-9 flex items-center justify-center text-[#94A3B8] text-[14px]">
        ...
      </span>

      <button
        onClick={() => onPageChange?.(totalPages)}
        className={`w-9 h-9 flex items-center justify-center rounded-[8px] text-[14px] font-medium transition-colors ${
          currentPage === totalPages
            ? "border border-[#F97316] bg-[#FFEEE5] text-[#F97316] font-semibold"
            : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
        }`}
      >
        {totalPages}
      </button>

      {/* Next Button */}
      <button
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
