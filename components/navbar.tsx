"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

const sectionIds = ["about", "experience", "skills", "education", "projects", "contact"]

function useActiveSection(isHome: boolean) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    if (!isHome) return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  return activeId
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative pb-1 text-[15px] font-semibold transition-all duration-300 ease-out lg:text-base",
        isActive ? "text-white" : "text-slate-200 hover:text-cyan-100"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_10px_rgba(56,189,248,0.35)] transition-all duration-300 ease-out",
          isActive ? "scale-x-100" : "group-hover:scale-x-100"
        )}
      />
    </a>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const activeId = useActiveSection(isHome)

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  const orderedLinks = [
    { key: "about", href: sectionHref("about"), label: "About", isActive: isHome && activeId === "about" },
    { key: "experience", href: sectionHref("experience"), label: "Experience", isActive: isHome && activeId === "experience" },
    { key: "skills", href: sectionHref("skills"), label: "Skills", isActive: isHome && activeId === "skills" },
    { key: "education", href: sectionHref("education"), label: "Education", isActive: isHome && activeId === "education" },
    { key: "projects", href: sectionHref("projects"), label: "Projects", isActive: isHome && activeId === "projects" },
    { key: "life", href: "/life", label: "Life", isActive: pathname === "/life" },
    { key: "contact", href: sectionHref("contact"), label: "Contact", isActive: isHome && activeId === "contact" },
  ]

  return (
    <header
      data-cursor="nav"
      className="sticky top-0 z-50 bg-background/70 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[4.35rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={isHome ? "#top" : "/"} className="text-lg font-extrabold tracking-tight text-slate-100 transition-colors duration-300 hover:text-white sm:text-[1.3rem]">
          Manali <span className="text-gradient">Rathod</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {orderedLinks.map((link) => (
            <NavLink key={link.key} href={link.href} label={link.label} isActive={link.isActive} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-9 cursor-pointer rounded-full border border-white/5 bg-white/[0.03] text-slate-200 transition-all duration-300 ease-out hover:scale-[1.08] hover:border-cyan-300/20 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_0_24px_rgba(56,189,248,0.2),0_0_30px_rgba(168,85,247,0.16)]"
            render={
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon className="size-5" />
              </a>
            }
          />
          <Button
            variant="ghost"
            size="icon-sm"
            className="size-9 cursor-pointer rounded-full border border-white/5 bg-white/[0.03] text-slate-200 transition-all duration-300 ease-out hover:scale-[1.08] hover:border-cyan-300/20 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_0_24px_rgba(56,189,248,0.2),0_0_30px_rgba(168,85,247,0.16)]"
            render={
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="size-5" />
              </a>
            }
          />
          <Button
            variant="secondary"
            size="sm"
            className="h-9 cursor-pointer rounded-xl border border-white/10 bg-white/[0.06] px-4 text-[15px] font-medium text-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/[0.1] hover:shadow-[0_10px_28px_rgba(56,189,248,0.14),0_0_26px_rgba(168,85,247,0.12)]"
            render={
              <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                <FileDown className="size-4" />
                Download Resume
              </a>
            }
          />
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon-sm" aria-label="Open menu" />}
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 p-0">
            <SheetHeader className="border-b border-white/10">
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4 text-sm">
              {orderedLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 border-t border-white/10 p-4">
              <Button
                variant="outline"
                size="sm"
                render={
                  <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="size-3.5" />
                    GitHub
                  </a>
                }
              />
              <Button
                variant="outline"
                size="sm"
                render={
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon className="size-3.5" />
                    LinkedIn
                  </a>
                }
              />
              <Button
                variant="secondary"
                size="sm"
                render={
                  <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                    <FileDown className="size-3.5" />
                    Download Resume
                  </a>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
