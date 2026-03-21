"use client";

import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import content from "@/data/content.json";

const { services } = content;

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-white">
      <div className="text-center mb-14">
        <Eyebrow text={services.eyebrow} />
        <h2
          className="text-3xl md:text-4xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {services.title}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.cards.map((card, i) => (
          <div
            key={i}
            className="group flex flex-col overflow-hidden rounded-3xl bg-pearl border border-sand/50 transition-shadow hover:shadow-lg"
          >
            {/* Imagem do card */}
            <div className="relative aspect-[4/3] overflow-hidden bg-sand">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col p-6">
              <h3
                className="text-xl font-bold text-ink mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-ink/60 mb-4">{card.description}</p>

              <ul className="mb-6 space-y-2 flex-1">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-ink/70">
                    <Check className="h-4 w-4 text-blue-deep shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Button
                label={card.cta.label}
                message={card.cta.message}
                variant="secondary"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
