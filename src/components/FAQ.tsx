"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import content from "@/data/content.json";

const { faq } = content;

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Eyebrow text={faq.eyebrow} />
          <h2
            className="text-3xl md:text-4xl font-bold text-ink"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {faq.title}
          </h2>
        </div>

        <Accordion items={faq.items} />

        <div className="mt-10 text-center">
          <p className="text-sm text-ink/50 mb-4">Ainda tem dúvidas?</p>
          <Button
            label="Tirar dúvida no WhatsApp"
            message="Olá! Vim pelo site e tenho uma dúvida."
            variant="outline"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
