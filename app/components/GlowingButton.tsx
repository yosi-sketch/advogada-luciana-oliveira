"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "outline" | "gold" | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "dark",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs font-semibold tracking-wider",
    md: "px-6 py-3.5 text-xs font-bold tracking-wider",
    lg: "px-7 py-4 text-xs sm:text-sm font-bold tracking-wider",
  }[size];

  const variantClasses = {
    dark: "bg-[#121417] text-[#FAF7F2] border border-[#2B303A] hover:bg-[#1E232B] hover:border-[#B89047]/60 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(184,144,71,0.2)]",
    outline: "bg-white/80 backdrop-blur-xs text-[#121417] border border-[#DCD3C5] hover:border-[#B89047] hover:bg-[#FAF7F2] shadow-xs",
    gold: "bg-[#B89047] text-[#121417] border border-[#CCA554] hover:bg-[#CCA554] shadow-[0_4px_14px_rgba(184,144,71,0.3)] hover:shadow-[0_6px_20px_rgba(184,144,71,0.4)]",
    white: "bg-white text-[#121417] border border-[#E8E1D5] hover:bg-[#FAF7F2] hover:border-[#B89047] shadow-sm",
  }[variant];

  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-lg select-none text-center transition-all duration-200 active:scale-[0.98] cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
