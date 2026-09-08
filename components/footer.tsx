import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { siteConfig, withBasePath } from "@/lib/site"

const footerLinks = [
  { href: withBasePath("/#experience"), label: "Experience" },
  { href: withBasePath("/#projects"), label: "Projects" },
  { href: withBasePath("/#skills"), label: "Skills" },
  { href: withBasePath("/#education"), label: "Education" },
  { href: withBasePath("/#about"), label: "About" },
  { href: withBasePath("/#contact"), label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy on-dark relative overflow-hidden border-t border-white/10 text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-indigo font-mono text-sm font-bold text-white"
            >
              MR
            </span>
            <div>
              <p className="font-heading text-base font-bold text-white">{siteConfig.name}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg py-1 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/life"
              className="rounded-lg py-1 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              Life
            </Link>
            <Link
              href="/why-hire-me"
              className="rounded-lg py-1 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              Why Hire Me
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center rounded-xl border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center rounded-xl border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
            <a
              href={siteConfig.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white/90"
            >
              Resume
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
