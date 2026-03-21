"use client";

import { Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import content from "@/data/content.json";

const { testimonials } = content;

export default function Testimonials() {
  return (
    <SectionWrapper id="depoimentos" className="bg-white">
      <div className="text-center mb-14">
        <Eyebrow text={testimonials.eyebrow} />
        <h2
          className="text-3xl md:text-4xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {testimonials.title}
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {testimonials.items.map((item, i) => (
          <div
            key={i}
            className="relative rounded-3xl bg-pearl p-8 border border-sand/50"
          >
            <Quote className="h-8 w-8 text-blue-soft/40 mb-4" />

            <p className="text-base text-ink/70 leading-relaxed mb-6 italic">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-sand overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-bronze">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
