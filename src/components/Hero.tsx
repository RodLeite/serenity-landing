"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import Button from "@/components/ui/Button";

const { hero } = content;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-pearl pt-20">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <span className="inline-block rounded-full bg-sand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bronze mb-6">
              {hero.badge}
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ink mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {hero.title}
            </h1>

            <p className="text-lg text-ink/60 leading-relaxed mb-8 max-w-lg">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                label={hero.primaryCta.label}
                message={hero.primaryCta.message}
                variant="primary"
              />
              <Button
                label={hero.secondaryCta.label}
                href={hero.secondaryCta.href}
                variant="outline"
              />
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
              <img
                src={hero.heroImage}
                alt="Serenity — Centro de Estética e Odontológico"
                className="h-full w-full object-cover"
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>
            {/* Detalhe decorativo */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-blue-soft/30 -z-10" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sand -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
