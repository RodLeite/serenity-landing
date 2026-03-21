"use client";

import { whatsappLink } from "@/lib/whatsapp";

type ButtonProps = {
  label: string;
  href?: string;
  message?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  label,
  href,
  message,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const finalHref = message ? whatsappLink(message) : href || "#";
  const isExternal = finalHref.startsWith("http");

  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-blue-deep text-white hover:bg-blue-soft hover:text-ink",
    secondary: "bg-sand text-ink hover:bg-bronze hover:text-white",
    outline: "border-2 border-blue-deep text-blue-deep hover:bg-blue-deep hover:text-white",
  };

  return (
    <a
      href={finalHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
