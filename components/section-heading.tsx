"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p className="section-eyebrow text-[13px] font-bold tracking-[0.16em] uppercase sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p
          className={
            "mt-3 max-w-2xl text-base leading-7 text-slate-300 " +
            (align === "center" ? "mx-auto" : "")
          }
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
