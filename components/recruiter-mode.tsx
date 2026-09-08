"use client"

import { useState } from "react"
import { Briefcase, FolderKanban, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { recruiterRoleProfiles } from "@/lib/content"

export function RecruiterMode() {
  const [activeRole, setActiveRole] = useState(recruiterRoleProfiles[0]?.id ?? "")
  const activeProfile =
    recruiterRoleProfiles.find((profile) => profile.id === activeRole) ?? recruiterRoleProfiles[0]

  const panels = [
    {
      icon: Briefcase,
      tint: "bg-brand/10 text-brand",
      title: "Best matching experience",
      body: <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{activeProfile.matchingExperience}</p>,
    },
    {
      icon: FolderKanban,
      tint: "bg-coral/12 text-coral",
      title: "Best matching projects",
      body: (
        <ul className="mt-3 flex flex-wrap gap-2">
          {activeProfile.matchingProjects.map((project) => (
            <li
              key={project}
              className="rounded-lg border border-hairline bg-sky px-2.5 py-1 text-sm font-medium text-subtle"
            >
              {project}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Sparkles,
      tint: "bg-teal/12 text-teal-ink",
      title: "Top skills",
      body: (
        <ul className="mt-3 flex flex-wrap gap-2">
          {activeProfile.topSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-hairline bg-sky px-2.5 py-1 text-sm font-medium text-subtle"
            >
              {skill}
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <section className="border-b border-hairline bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Recruiter Mode"
          title="Choose what you are hiring for"
          description="A quick role-based view of the experience, projects, and skills that match best."
        />

        <div role="tablist" aria-label="Role profiles" className="mt-8 flex flex-wrap gap-2.5">
          {recruiterRoleProfiles.map((profile) => {
            const isActive = profile.id === activeProfile.id
            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                id={`role-tab-${profile.id}`}
                aria-selected={isActive}
                aria-controls="role-panel"
                onClick={() => setActiveRole(profile.id)}
                className={cn(
                  "cursor-pointer rounded-xl border px-4 py-2.5 text-[0.9375rem] font-semibold transition-colors duration-200",
                  isActive
                    ? "border-brand bg-brand text-white"
                    : "border-hairline bg-sky text-subtle hover:border-brand/40 hover:text-brand"
                )}
              >
                {profile.label}
              </button>
            )
          })}
        </div>

        <div
          id="role-panel"
          role="tabpanel"
          aria-labelledby={`role-tab-${activeProfile.id}`}
          className="mt-6 grid gap-5 lg:grid-cols-3"
        >
          {panels.map((panel) => {
            const Icon = panel.icon
            return (
              <div
                key={panel.title}
                className="rounded-2xl border border-hairline bg-white p-6 card-shadow"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${panel.tint}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-extrabold text-ink">{panel.title}</h3>
                </div>
                {panel.body}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
