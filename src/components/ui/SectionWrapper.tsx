"use client";

import { motion } from "framer-motion";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`px-6 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
