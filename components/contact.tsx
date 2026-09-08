"use client"

import { useState, type FormEvent } from "react"
import { FileDown, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site"

const contactCards = [
  {
    label: "Phone",
    value: "+1 (812) 679-3058",
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
    icon: Phone,
    external: false,
    tint: "bg-white/20 text-white",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
    tint: "bg-coral/25 text-[#ffb3ab]",
  },
  {
    label: "GitHub",
    value: "ManaliRathod9",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
    tint: "bg-white/12 text-white",
  },
  {
    label: "LinkedIn",
    value: "manali-rathod",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
    tint: "bg-teal/25 text-[#7fe8d8]",
  },
]

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = `Portfolio message from ${name || "a visitor"}`
    const body = `${message}\n\n- ${name}${email ? ` (${email})` : ""}`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section id="contact" className="bg-contact on-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-0 size-96 bg-indigo/45" />
        <span className="blob blob-2 -right-20 bottom-0 size-96 bg-teal/25" />
        <span className="blob blob-3 left-1/3 top-1/2 size-80 bg-pink/20" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-14">
          <div>
            <p className="label-mono inline-flex rounded-lg bg-white/10 px-2.5 py-1 text-white/80">
              Contact
            </p>
            <h2 className="mt-4 text-[1.75rem] font-extrabold text-white sm:text-[2.125rem]">
              Let&apos;s build something{" "}
              <span className="accent-serif text-orange">useful</span> together.
            </h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-white/70">
              Have a question, opportunity, or project idea? Send me a message or connect with me
              online.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon
                return (
                  <li key={card.label}>
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.05] p-4 transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
                    >
                      <span
                        aria-hidden
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${card.tint}`}
                      >
                        <Icon className="size-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="label-mono block text-white/50">{card.label}</span>
                        <span className="mt-0.5 block truncate text-[0.9375rem] font-semibold text-white">
                          {card.value}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/15 pt-8">
              <Button
                variant="contrast"
                nativeButton={false}
                render={
                  <a href={siteConfig.resumeHref} target="_blank" rel="noreferrer">
                    <FileDown className="transition-transform duration-200 group-hover/button:translate-y-0.5" />
                    Download Resume
                  </a>
                }
              />
            </div>
          </div>

          <div className="on-light rounded-2xl border border-hairline bg-white p-6 text-ink sm:p-7">
            <h3 className="text-xl font-extrabold text-ink">Send me a message</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="What's the role or project?"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send />
                Send Message
              </Button>

              <p aria-live="polite" className="min-h-5 text-center text-sm font-semibold text-teal-ink">
                {sent ? "Thanks, your message is ready to send." : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
