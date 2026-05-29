import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "accent" | "primary";
  className?: string;
}

const variantes = {
  default: "bg-surface border-surface-2",
  accent: "bg-linear-to-br from-accent-950 to-[#1a1a2e] border-accent-900",
  primary: "bg-linear-to-br from-accent-900 to-accent-950 border-accent-700",
};

export function Card({ children, variant = "default", className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border p-5 ${variantes[variant]} ${className}`}>
      {children}
    </div>
  );
}
