"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import content from "@/data/content.json";
import { whatsappLink } from "@/lib/whatsapp";

const { header } = content;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pearl/80 backdrop-blur-md border-b border-sand/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-[var(--font-playfair)] text-2xl font-bold text-blue-deep" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Serenity
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-bronze"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink(header.cta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-deep text-white text-sm font-medium transition-all hover:bg-blue-soft hover:text-ink"
          >
            {header.cta.label}
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ink cursor-pointer"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-sand/50 bg-pearl px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-ink/70 transition-colors hover:text-bronze"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(header.cta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-deep text-white text-sm font-medium"
            >
              {header.cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
