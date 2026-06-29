"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"
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
    border: "hover:border-cyan-400/45",
    glow: "hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.45)]",
    iconBorder: "border-cyan-400/30",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-300",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
    border: "hover:border-blue-400/45",
    glow: "hover:shadow-[0_0_24px_-6px_rgba(96,165,250,0.45)]",
    iconBorder: "border-blue-400/30",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-300",
  },
  {
    label: "GitHub",
    value: "ManaliRathod9",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
    border: "hover:border-violet-400/45",
    glow: "hover:shadow-[0_0_24px_-6px_rgba(167,139,250,0.45)]",
    iconBorder: "border-violet-400/30",
    iconBg: "bg-violet-500/10",
    iconText: "text-violet-300",
  },
  {
    label: "LinkedIn",
    value: "manali-rathod",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
    border: "hover:border-blue-400/45",
    glow: "hover:shadow-[0_0_24px_-6px_rgba(96,165,250,0.45)]",
    iconBorder: "border-blue-400/30",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-300",
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
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent"
      />
      <div aria-hidden className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(46rem_30rem_at_8%_25%,oklch(0.32_0.1_215/16%),transparent_62%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_90%_10%,oklch(0.32_0.11_300/18%),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="section-eyebrow text-[13px] font-bold uppercase tracking-[0.16em] sm:text-sm">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-[2.6rem]">
              Contact Me
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-slate-300">
              Have a question, opportunity, or project idea? Send me a message or connect with me
              online.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {contactCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    data-cursor="card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                    className={`glass-card group flex items-center gap-3 rounded-xl p-3.5 transition-all duration-250 ${card.border} ${card.glow}`}
                  >
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-250 group-hover:scale-110 ${card.iconBorder} ${card.iconBg} ${card.iconText}`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-400">{card.label}</span>
                      <span className="block truncate text-[15px] font-medium text-foreground">{card.value}</span>
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="gradient-border glass-card rounded-2xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:p-7"
          >
            <h3 className="text-xl font-semibold text-foreground">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="What's the role or project?"
                  rows={5}
                  required
                />
              </div>

              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Button
                  type="submit"
                  size="lg"
                  data-cursor="glow"
                  className="group/send w-full bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-violet-400"
                >
                  <Send className="size-4 transition-transform duration-300 group-hover/send:-translate-y-0.5 group-hover/send:translate-x-0.5" />
                  Send Message
                </Button>
              </motion.div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center text-sm text-cyan-300"
                >
                  Thanks, your message is ready to send.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
