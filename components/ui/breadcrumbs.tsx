import React from "react";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-[14px] text-[#64748B] select-none ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] flex-shrink-0" />
            )}
            {isLast ? (
              <span className="font-medium text-[#0F172A] truncate">
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                className="hover:text-[#0F172A] transition-colors truncate"
              >
                {item.label}
              </a>
            ) : (
              <span className="truncate">{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
