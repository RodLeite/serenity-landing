"use client";

import { Heart, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import content from "@/data/content.json";

const { trustBar } = content;

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Sparkles,
  ShieldCheck,
  MapPin,
};

export default function TrustBar() {
  return (
    <SectionWrapper className="bg-white py-16 md:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustBar.items.map((item, i) => {
          const Icon = iconMap[item.icon] || Heart;
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-soft/20">
                <Icon className="h-6 w-6 text-blue-deep" />
              </div>
              <h3 className="text-sm font-semibold text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
