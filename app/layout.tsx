import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.intro,
}

/**
 * Applies the scroll-reveal hiding styles before first paint, so revealed
 * content never flashes in. Deliberately the only thing this inline script
 * does: the per-element marking happens after hydration in <ScrollReveal />,
 * because mutating those elements any earlier would trip React's hydration
 * mismatch check. The watchdog un-hides everything if that component never
 * mounts, and with JS off the class is never added at all.
 */
const revealScript = `
(function () {
  try {
    var root = document.documentElement;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('js-reveal');
    window.__revealWatchdog = setTimeout(function () {
      root.classList.remove('js-reveal');
    }, 4000);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <ScrollReveal />
        <TooltipProvider>
          <a
            href="#main"
            className="sr-only rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}
