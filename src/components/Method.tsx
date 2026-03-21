"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import content from "@/data/content.json";

const { method } = content;

export default function Method() {
  return (
    <SectionWrapper>
      <div className="text-center mb-14">
        <Eyebrow text={method.eyebrow} />
        <h2
          className="text-3xl md:text-4xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {method.title}
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {method.steps.map((step, i) => (
          <div key={i} className="relative text-center px-4">
            {/* Número */}
            <span
              className="block text-5xl font-bold text-blue-soft/40 mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {step.number}
            </span>

            <h3 className="text-base font-semibold text-ink mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-ink/60 leading-relaxed">{step.text}</p>

            {/* Conector horizontal entre steps (desktop) */}
            {i < method.steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-sand" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          label={method.cta.label}
          message={method.cta.message}
          variant="primary"
        />
      </div>
    </SectionWrapper>
  );
}
