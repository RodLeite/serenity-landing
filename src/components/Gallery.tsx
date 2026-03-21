"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import content from "@/data/content.json";

const { gallery } = content;

export default function Gallery() {
  return (
    <SectionWrapper>
      <div className="text-center mb-14">
        <Eyebrow text={gallery.eyebrow} />
        <h2
          className="text-3xl md:text-4xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {gallery.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl bg-sand ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
