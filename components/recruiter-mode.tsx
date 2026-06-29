"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BriefcaseBusiness, FolderKanban, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { recruiterRoleProfiles } from "@/lib/content"

export function RecruiterMode() {
  const [activeRole, setActiveRole] = useState(recruiterRoleProfiles[0]?.id ?? "")
  const activeProfile = recruiterRoleProfiles.find((profile) => profile.id === activeRole) ?? recruiterRoleProfiles[0]

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_24rem_at_15%_20%,oklch(0.34_0.12_225/14%),transparent_65%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_22rem_at_85%_65%,oklch(0.34_0.12_300/13%),transparent_62%)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionHeading
          eyebrow="Recruiter Mode"
          title="Choose what you are hiring for"
          description="A quick role-based view of the experience, projects, and skills that match best."
        />

        <div className="mt-8 flex flex-wrap gap-2.5">
          {recruiterRoleProfiles.map((profile) => {
            const isActive = profile.id === activeProfile.id
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setActiveRole(profile.id)}
                data-cursor="button"
                className={[
                  "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                  isActive
                    ? "border-cyan-300/30 bg-linear-to-r from-cyan-500/18 via-blue-500/14 to-violet-500/18 text-white shadow-[0_0_24px_-8px_rgba(34,211,238,0.45)]"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-300/20 hover:bg-white/[0.06] hover:text-cyan-100",
                ].join(" ")}
              >
                {profile.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfile.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-card gradient-border-flow rounded-3xl p-5 sm:p-6"
            >
              <div className="grid gap-4 lg:grid-cols-[1.25fr_0.95fr_0.95fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <BriefcaseBusiness className="size-4 text-cyan-300" />
                    Best matching experience
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {activeProfile.matchingExperience}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <FolderKanban className="size-4 text-blue-300" />
                    Best matching projects
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProfile.matchingProjects.map((project) => (
                      <Badge
                        key={project}
                        variant="secondary"
                        className="border border-blue-300/10 bg-blue-400/10 text-slate-100"
                      >
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <Sparkles className="size-4 text-violet-300" />
                    Top skills
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProfile.topSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border border-violet-300/10 bg-violet-400/10 text-slate-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
