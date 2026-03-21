"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import content from "@/data/content.json";

const { about } = content;

export default function About() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Imagem */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
          <img
            src={about.image}
            alt="Espaço da clínica Serenity"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
        </div>

        {/* Texto */}
        <div>
          <Eyebrow text={about.eyebrow} />
          <h2
            className="text-3xl md:text-4xl font-bold text-ink mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {about.title}
          </h2>
          <p className="text-base text-ink/60 leading-relaxed mb-8">
            {about.text}
          </p>
          <Button
            label={about.cta.label}
            href={about.cta.href}
            variant="secondary"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
