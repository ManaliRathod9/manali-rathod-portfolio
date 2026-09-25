import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plane } from "lucide-react"
import { InstagramIcon, XIcon } from "@/components/icons"
import { siteConfig, withBasePath } from "@/lib/site"
import { lifeItems } from "@/lib/content"

/**
 * Only the travel photo exists as an asset, so the other tiles use a large
 * emoji inside a designed, gradient-tinted panel rather than a stretched or
 * unrelated image.
 */
const tiles: Record<
  string,
  {
    emoji: string
    panel: string
    ring: string
    iconMotion: string
    area: string
    extra?: "steam" | "progress"
  }
> = {
  badminton: {
    emoji: "🏸",
    panel: "bg-gradient-to-br from-sky to-lavender",
    ring: "hover:border-brand/45",
    iconMotion: "group-hover:-rotate-[18deg] group-hover:scale-110",
    area: "lg:col-start-3 lg:row-start-1",
  },
  cooking: {
    emoji: "🍳",
    panel: "bg-gradient-to-br from-peach to-[#ffe8f1]",
    ring: "hover:border-orange/50",
    iconMotion: "group-hover:-translate-y-2 group-hover:scale-110",
    area: "lg:col-start-3 lg:row-start-2",
    extra: "steam",
  },
  gym: {
    emoji: "🏋️",
    panel: "bg-gradient-to-br from-mint to-sky",
    ring: "hover:border-teal/50",
    iconMotion: "group-hover:scale-125",
    area: "lg:col-start-1 lg:row-start-3",
    extra: "progress",
  },
  "social-media": {
    emoji: "📸",
    panel: "bg-gradient-to-br from-[#ffe8f1] to-lavender",
    ring: "hover:border-pink/50",
    iconMotion: "group-hover:rotate-6 group-hover:scale-110",
    area: "lg:col-span-2 lg:col-start-2 lg:row-start-3",
  },
}

const travelItem = lifeItems.find((item) => item.id === "travel")!
const smallItems = lifeItems.filter((item) => item.id !== "travel")

const cardBase =
  "group flex flex-col overflow-hidden rounded-2xl border border-white bg-white/85 backdrop-blur-sm card-shadow transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:card-shadow-hover"

/** Profiles still set to "#" in lib/site.ts are placeholders, so their buttons stay hidden. */
const hasLink = (href: string) => href !== "#"
const hasSocialLinks = hasLink(siteConfig.social.instagram) || hasLink(siteConfig.social.x)

export function LifeContent() {
  return (
    <div className="bg-life relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-28 top-0 size-96 bg-pink/25" />
        <span className="blob blob-2 -right-24 top-1/3 size-96 bg-indigo/25" />
        <span className="blob blob-3 bottom-0 left-1/3 size-88 bg-teal/22" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg py-1 text-[0.9375rem] font-semibold text-subtle transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <header className="mx-auto mt-6 max-w-xl text-center">
          <p className="label-mono inline-flex rounded-lg bg-white/70 px-2.5 py-1 text-brand backdrop-blur-sm">
            A bit more about me
          </p>
          <h1 className="anim-enter mt-4 text-[2rem] font-extrabold text-ink sm:text-[2.5rem]">
            Life outside{" "}
            <span className="accent-serif text-gradient-signature">work</span>
          </h1>
          <p className="anim-enter anim-delay-1 mt-3 text-lg leading-relaxed text-subtle">
            Some of what I enjoy when I&apos;m not working.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Travel - the one tile with a real photograph. */}
          {/* Life cards render visible from the first paint (no scroll reveal):
              the page is short and its content should never wait on JavaScript. */}
          <article className={`${cardBase} sm:col-span-2 lg:row-span-2`}>
            <div className="relative aspect-4/3 w-full overflow-hidden lg:aspect-auto lg:min-h-80 lg:flex-1">
              <Image
                src={withBasePath("/images/manali-travel.jpg")}
                alt="Manali standing outdoors among autumn trees while travelling"
                fill
                sizes="(min-width: 1024px) 720px, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-[47%_35%] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                priority
              />
              <span
                aria-hidden
                className="anim-float absolute right-4 top-4 flex size-11 items-center justify-center rounded-xl border border-white bg-white/90 text-brand shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1"
              >
                <Plane className="size-5 -rotate-12" />
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-extrabold text-ink sm:text-2xl">{travelItem.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                {travelItem.description}
              </p>
            </div>
          </article>

          {smallItems.map((item) => {
            const tile = tiles[item.id]
            return (
              <article key={item.id} className={`${cardBase} ${tile.ring} ${tile.area}`}>
                <div className={`relative flex items-center justify-center py-9 ${tile.panel}`}>
                  {tile.extra === "steam" && (
                    <span aria-hidden className="absolute inset-x-0 top-3 flex justify-center gap-2">
                      <span className="anim-float size-1.5 rounded-full bg-orange/50" />
                      <span className="anim-float-slow size-2 rounded-full bg-pink/45" />
                      <span className="anim-float size-1.5 rounded-full bg-orange/40" />
                    </span>
                  )}
                  <span
                    aria-hidden
                    className={`text-5xl transition-transform duration-300 ease-out ${tile.iconMotion}`}
                  >
                    {tile.emoji}
                  </span>
                  {tile.extra === "progress" && (
                    <span
                      aria-hidden
                      className="absolute inset-x-8 bottom-4 h-1.5 overflow-hidden rounded-full bg-white/70"
                    >
                      <span className="block h-full w-1/3 rounded-full bg-gradient-to-r from-teal to-brand transition-all duration-700 ease-out group-hover:w-full" />
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-subtle">
                    {item.description}
                  </p>

                  {item.id === "social-media" && hasSocialLinks && (
                    <div className="mt-4 flex gap-2.5">
                      {hasLink(siteConfig.social.instagram) && (
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Instagram"
                          className="flex size-11 items-center justify-center rounded-xl border border-hairline bg-white text-subtle transition-[colors,transform] duration-200 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-orange hover:via-pink hover:to-indigo hover:text-white"
                        >
                          <InstagramIcon className="size-4.5" />
                        </a>
                      )}
                      {hasLink(siteConfig.social.x) && (
                        <a
                          href={siteConfig.social.x}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="X"
                          className="flex size-11 items-center justify-center rounded-xl border border-hairline bg-white text-subtle transition-[colors,transform] duration-200 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
                        >
                          <XIcon className="size-4.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
