import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center w-full">
        <select
          ref={ref}
          className={`h-[44px] w-full appearance-none bg-white text-[#0F172A] border border-[#E2E8F0] rounded-[12px] px-4 pr-10 text-[14px] font-medium transition-colors outline-none cursor-pointer focus:border-[#FB923C] focus:ring-2 focus:ring-[#FED7AA]/50 ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 pointer-events-none text-[#64748B] flex items-center">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
