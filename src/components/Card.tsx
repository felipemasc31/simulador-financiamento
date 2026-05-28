import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "accent" | "primary";
  className?: string;
}

const variantes = {
  default: "bg-surface border-surface-2",
  accent: "bg-linear-to-br from-indigo-950 to-[#1a1a2e] border-indigo-900",
  primary: "bg-linear-to-br from-indigo-900 to-indigo-950 border-indigo-700",
};

export function Card({ children, variant = "default", className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border p-5 ${variantes[variant]} ${className}`}>
      {children}
    </div>
  );
}
