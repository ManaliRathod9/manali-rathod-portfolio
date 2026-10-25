import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"

// <Link> so that, from other pages, these navigate client-side instead of reloading the site.
const footerLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy grain on-dark metal-border-t relative overflow-hidden text-ivory">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-10 items-center justify-center rounded-xl bg-metal font-mono text-sm font-bold text-espresso shadow-[inset_0_1px_0_rgb(255_255_255/0.6)]"
            >
              MR
            </span>
            <div>
              <p className="font-heading text-base font-bold text-ivory">{siteConfig.name}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-platinum/70 underline-offset-4 transition-colors hover:text-lavender hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg py-1 text-sm font-semibold text-platinum/80 transition-colors hover:text-lavender"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/life"
              className="rounded-lg py-1 text-sm font-semibold text-platinum/80 transition-colors hover:text-lavender"
            >
              Life
            </Link>
            <Link
              href="/why-hire-me"
              className="rounded-lg py-1 text-sm font-semibold text-platinum/80 transition-colors hover:text-lavender"
            >
              Why Work With Me
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center rounded-lg border border-platinum/25 text-platinum transition-colors hover:border-lavender/60 hover:bg-lavender/10 hover:text-lavender"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center rounded-lg border border-platinum/25 text-platinum transition-colors hover:border-lavender/60 hover:bg-lavender/10 hover:text-lavender"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
            <a
              href={siteConfig.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/40 bg-platinum bg-metal-soft px-4 py-2.5 text-sm font-bold text-espresso transition-shadow duration-200 hover:glow-lavender-strong"
            >
              Resume
            </a>
          </div>
        </div>

        <p className="metal-border-t mt-8 pt-6 text-sm text-platinum/60">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
