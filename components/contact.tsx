"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, FileDown, Mail, Phone, Send } from "lucide-react"
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
    tint: "bg-metal text-espresso",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
    tint: "bg-lavender/20 text-lavender",
  },
  {
    label: "GitHub",
    value: "ManaliRathod9",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
    tint: "bg-lavender/20 text-lavender",
  },
  {
    label: "LinkedIn",
    value: "manali-rathod",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
    tint: "bg-metal text-espresso",
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
    <section id="contact" className="bg-contact grain on-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-0 size-96 bg-lavender/12" />
        <span className="blob blob-2 -right-20 bottom-0 size-96 bg-platinum/8" />
        <span className="blob blob-3 left-1/3 top-1/2 size-80 bg-orange/10" />
      </div>
      <span aria-hidden className="spotlight spotlight-soft absolute -left-[8%] top-[4%] h-[70%] w-[60%]" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="flex items-end gap-4 sm:gap-5">
              <span aria-hidden className="section-index text-metal shrink-0 select-none">07</span>
              <div className="flex min-w-0 flex-1 items-center gap-3 pb-1.5">
                <p className="label-mono shrink-0 text-lavender">Contact</p>
                <span aria-hidden className="metal-rule flex-1 opacity-70" />
              </div>
            </div>
            <h2 className="mt-7 text-[2.2rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-ivory sm:text-[3rem] lg:text-[3.5rem]">
              Let&apos;s build something{" "}
              <span className="accent-serif text-lavender-glow inline-block text-[1.18em] leading-[0.9]">useful</span> together.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-platinum/80">
              Hiring for AI product, engineering, or research work? Or working on something
              that&apos;s almost there? I&apos;d like to hear about it.
            </p>

            {/* Contact details as open, hairline-ruled rows. */}
            <ul className="mt-10 grid border-t border-platinum/15 sm:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <li
                    key={card.label}
                    className={`border-b border-platinum/15 ${index % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6"}`}
                  >
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-lg py-5 transition-colors duration-300"
                    >
                      <span
                        aria-hidden
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-shadow duration-300 group-hover:glow-lavender ${card.tint}`}
                      >
                        <Icon className="size-4.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="label-mono block text-platinum/65">{card.label}</span>
                        <span className="mt-0.5 block truncate text-[0.9375rem] font-semibold text-ivory transition-colors duration-300 group-hover:text-lavender">
                          {card.value}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-4 shrink-0 text-platinum/40 transition-[color,translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lavender" />
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
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

          <div className="on-light surface-platinum metal-border self-start rounded-[1.75rem] p-6 text-ink glow-lavender sm:p-8 lg:col-span-5 lg:mt-24">
            <span aria-hidden className="absolute inset-x-10 top-0 h-px bg-metal" />
            <h3 className="text-xl font-extrabold text-ink">Write me a message</h3>
            <p id="contact-form-note" className="mt-1.5 text-sm leading-relaxed text-subtle">
              This opens a pre-filled email in your mail app, so you can review it before sending.
            </p>
            <form aria-describedby="contact-form-note" onSubmit={handleSubmit} className="mt-5 space-y-4">
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
                Open Email Draft
              </Button>

              <p aria-live="polite" className="min-h-5 text-center text-sm font-semibold text-mocha">
                {sent
                  ? `Your email app should now be open with this message. If it didn't open, email me at ${siteConfig.email}.`
                  : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
