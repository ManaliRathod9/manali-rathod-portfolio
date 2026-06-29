"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { ProfilePhoto } from "@/components/profile-photo"

const paragraphs = [
  "Most of what I know, I learned by building things, breaking them, and then figuring out what went wrong. That is usually where I learn the most.",
  "I recently completed my MS in Computer Science at Indiana University Bloomington, after my bachelor's in Information Technology from the University of Mumbai. My work has moved across data analytics, machine learning, dashboards, Agentic AI, and full-stack tools.",
  "Right now, my focus is on building practical data and AI systems. I enjoy working with messy datasets, cleaning and organizing them, finding patterns, building dashboards, and creating tools that make the output easier to use.",
  "I have worked on recommendation systems, user-data workflows, research data tools, business dashboards, and AI-based applications. Across these projects, I like seeing how everything connects: the data, the model, the dashboard, the backend, and the interface people actually use.",
  "Some of my recent projects include PaperTrail, AI Water Tracker, BalanceBite, MeetMinder, and the Bates IU Research Data Tool. They are different, but they all show the kind of work I enjoy: taking something unclear or messy and turning it into a useful product.",
  "Right now, I am looking for roles in Data Analytics, Business Intelligence, Machine Learning, Agentic AI, or Data-focused Full-Stack Development.",
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_85%_0%,oklch(0.32_0.1_300/16%),transparent_65%)]"
      />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[200px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-44 lg:mx-0"
          >
            <ProfilePhoto
              size={220}
              shape="rounded"
              glow={false}
              className="aspect-4/5 w-full shadow-xl shadow-black/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="max-w-180 space-y-4 text-base font-normal text-slate-300 sm:text-lg"
            style={{ lineHeight: 1.7 }}
          >
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
