import React from "react";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  shortcut?: string;
  isSearch?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      icon,
      shortcut,
      isSearch = false,
      placeholder = "Search anything...",
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative flex items-center w-full">
        {(isSearch || icon) && (
          <div className="absolute left-4 flex items-center pointer-events-none text-[#64748B]">
            {icon ? icon : <Search className="w-4 h-4 text-[#64748B]" />}
          </div>
        )}
        <input
          ref={ref}
          placeholder={placeholder}
          className={`h-[44px] w-full bg-white text-[#0F172A] placeholder:text-[#94A3B8] border border-[#E2E8F0] rounded-[12px] text-[14px] transition-colors outline-none focus:border-[#FB923C] focus:ring-2 focus:ring-[#FED7AA]/50 ${
            isSearch || icon ? "pl-11" : "pl-4"
          } ${shortcut ? "pr-14" : "pr-4"} ${className}`}
          {...props}
        />
        {shortcut && (
          <div className="absolute right-3.5 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-medium text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0] rounded-[6px]">
              {shortcut}
            </kbd>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
