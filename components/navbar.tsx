"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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

const sectionIds = ["experience", "projects", "skills", "education", "about", "contact"]

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

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  // Controlled so menu items can stay plain links (not button-role close controls) and still close it.
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(isHome)

  // Off the homepage, section links are cross-page, so they use <Link> (client-side,
  // prefetched) instead of reloading the whole site; on it they stay in-page anchors.
  const section = (key: string, label: string) => ({
    key,
    label,
    href: isHome ? `#${key}` : `/#${key}`,
    route: !isHome,
    isActive: isHome && activeId === key,
  })

  const links = [
    section("experience", "Experience"),
    section("projects", "Projects"),
    section("skills", "Skills"),
    section("about", "About"),
    { key: "life", label: "Life", href: "/life", route: true, isActive: pathname === "/life" },
    section("contact", "Contact"),
  ]

  const LogoTag = isHome ? "a" : Link

  return (
    <header className="on-dark sticky top-0 z-50 border-b border-platinum/15 bg-[#24170f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <LogoTag
          href={isHome ? "#top" : "/"}
          aria-label={`${siteConfig.name} - Home`}
          className="logo-link flex items-center gap-2 rounded-lg py-1"
        >
          {/* Decorative: the link's aria-label already carries the name. */}
          <span aria-hidden className="logo-mark">
            <span className="logo-m">M</span>
            <span className="logo-r">R</span>
            <svg className="logo-underline" viewBox="0 0 48 10" fill="none">
              <path d="M2 3 Q23 12 44 3" pathLength="100" />
              <circle className="logo-data-point" r="2" />
            </svg>
          </span>
          <span className="font-heading text-[1.0625rem] font-bold tracking-tight text-ivory">
            {siteConfig.name}
          </span>
        </LogoTag>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const LinkTag = link.route ? Link : "a"
            return (
              <LinkTag
                key={link.key}
                href={link.href}
                aria-current={link.isActive ? "page" : undefined}
                className={cn(
                  // A hairline lavender underline marks the active link instead of a filled pill.
                  "relative rounded-md px-3 py-2 text-[0.875rem] font-medium tracking-wide transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-px after:h-px after:origin-left after:bg-lavender after:transition-transform after:duration-300",
                  link.isActive
                    ? "text-lavender after:scale-x-100"
                    : "text-platinum/80 after:scale-x-0 hover:text-lavender hover:after:scale-x-100"
                )}
              >
                {link.label}
              </LinkTag>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            className="text-platinum/80 hover:bg-lavender/10 hover:text-lavender"
            render={
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GithubIcon className="size-5" />
              </a>
            }
          />
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            className="text-platinum/80 hover:bg-lavender/10 hover:text-lavender"
            render={
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <LinkedinIcon className="size-5" />
              </a>
            }
          />
          <span aria-hidden className="mx-1 h-5 w-px bg-platinum/20" />
          <Button
            variant="contrast"
            size="sm"
            nativeButton={false}
            className="h-9"
            render={
              <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                <FileDown />
                Resume
              </a>
            }
          />
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                variant="secondary"
                size="icon-sm"
                aria-label="Open navigation menu"
                className="lg:hidden"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(20rem,86vw)] p-0">
            <SheetHeader className="border-b border-hairline px-5 py-4">
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-0.5 p-3">
              {links.map((link) => {
                const LinkTag = link.route ? Link : "a"
                return (
                  <LinkTag
                    key={link.key}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 font-sans text-base font-semibold transition-colors",
                      link.isActive
                        ? "bg-brand/10 text-brand"
                        : "text-ink hover:bg-ink/[0.05]"
                    )}
                  >
                    {link.label}
                  </LinkTag>
                )
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-2 border-t border-hairline p-4">
              <Button
                variant="secondary"
                nativeButton={false}
                render={
                  <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                    <GithubIcon />
                    GitHub
                  </a>
                }
              />
              <Button
                variant="secondary"
                nativeButton={false}
                render={
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon />
                    LinkedIn
                  </a>
                }
              />
              <Button
                nativeButton={false}
                render={
                  <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                    <FileDown />
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
