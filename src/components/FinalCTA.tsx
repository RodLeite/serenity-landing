"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import content from "@/data/content.json";

const { finalCta, meta } = content;

export default function FinalCTA() {
  return (
    <SectionWrapper id="contato" className="bg-sand/50">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-ink mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {finalCta.title}
        </h2>
        <p className="text-base text-ink/60 leading-relaxed mb-8">
          {finalCta.text}
        </p>
        <Button
          label={finalCta.cta.label}
          message={finalCta.cta.message}
          variant="primary"
          className="text-base px-8 py-4"
        />
      </div>

      {/* Info rápido */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3 text-center">
        <div className="flex flex-col items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-deep" />
          <p className="text-sm text-ink/70">{meta.address}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Clock className="h-5 w-5 text-blue-deep" />
          <div className="text-sm text-ink/70">
            <p>{meta.hours.weekdays}</p>
            <p>{meta.hours.saturday}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Phone className="h-5 w-5 text-blue-deep" />
          <p className="text-sm text-ink/70">(11) 97280-4531</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
