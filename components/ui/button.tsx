import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "default" | "md" | "sm";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      icon,
      iconPosition = "right",
      fullWidth = false,
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Height & padding according to Design System:
    // Default: Height 44px, Padding: 0 16px, Radius: 12px
    // Medium: Height 40px, Padding: 0 12px, Radius: 12px
    // Small: Height 32px, Padding: 0 10px, Radius: 8px
    const sizeStyles = {
      default: "h-[44px] px-4 text-[15px] rounded-[12px]",
      md: "h-[40px] px-3 text-[14px] rounded-[12px]",
      sm: "h-[32px] px-2.5 text-[12px] rounded-[8px]",
    }[size];

    const variantStyles = {
      primary: disabled
        ? "bg-[#FED7AA] text-white cursor-not-allowed border border-transparent"
        : "bg-[#F97316] text-white hover:bg-[#EA580C] active:bg-[#C2410C] border border-transparent shadow-[0_1px_2px_0_rgba(15,23,42,0.05)] cursor-pointer",
      secondary: disabled
        ? "bg-[#FAFAFC] text-[#FED7AA] border border-[#E2E8F0] cursor-not-allowed"
        : "bg-white text-[#F97316] border border-[#E2E8F0] hover:bg-[#FFF7ED] hover:border-[#FDBA74] active:bg-[#FFEDD5] cursor-pointer shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]",
      tertiary: disabled
        ? "bg-[#FAFAFC] text-[#94A3B8] border border-[#E2E8F0] cursor-not-allowed"
        : "bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:bg-[#F1F5F9] cursor-pointer shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]",
      text: disabled
        ? "bg-transparent text-[#FED7AA] cursor-not-allowed p-0 h-auto"
        : "bg-transparent text-[#F97316] hover:text-[#EA580C] active:text-[#C2410C] cursor-pointer p-0 h-auto font-medium",
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 ${sizeStyles} ${variantStyles} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0 inline-flex items-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0 inline-flex items-center">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
