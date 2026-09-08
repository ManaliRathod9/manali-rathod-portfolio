import Image from "next/image"
import { cn } from "@/lib/utils"
import { withBasePath } from "@/lib/site"

/**
 * Each project has its own visual: a real screenshot where the project is
 * deployed and reachable, otherwise a hand-built animated SVG in
 * /public/images/projects. The SVGs animate with CSS declared inside the
 * file, so they loop without JavaScript, fall back to their own static first
 * frame, and stop moving under prefers-reduced-motion.
 */
interface ThumbnailConfig {
  src: string
  alt: string
  /** Photos use next/image; the SVG artwork is served as-is. */
  kind: "photo" | "art"
  emoji: string
  backdrop: string
}

const thumbnails: Record<string, ThumbnailConfig> = {
  papertrail: {
    src: "/images/projects/papertrail.svg",
    alt: "Animated preview of the PaperTrail study tool showing a search field, research paper results appearing one by one, and a notes and comparison panel",
    kind: "art",
    emoji: "📄",
    backdrop: "bg-gradient-to-br from-sky via-lavender to-mint",
  },
  "ai-water-tracker": {
    src: "/images/projects/ai-water-tracker.svg",
    alt: "Animated preview of the AI Water Tracker showing a water drop filling and emptying, a hydration ring, and daily progress bars",
    kind: "art",
    emoji: "💧",
    backdrop: "bg-gradient-to-br from-sky via-lavender to-mint",
  },
  "bates-iu-tool": {
    src: "/images/projects/bates-iu-tool.svg",
    alt: "Animated preview of the Bates IU Research Data Tool showing a data table with variables being checked and a CSV export action",
    kind: "art",
    emoji: "🧪",
    backdrop: "bg-gradient-to-br from-mint via-sky to-lavender",
  },
  balancebite: {
    src: "/images/projects/balancebite.png",
    alt: "Screenshot of the BalanceBite app home screen showing the 21 day routine tracker interface",
    kind: "photo",
    emoji: "🥗",
    backdrop: "bg-secondary",
  },
  "car-sales-dashboard": {
    src: "/images/projects/car-sales-dashboard.svg",
    alt: "Animated preview of the Car Sales Dashboard showing KPI cards, a car silhouette, growing revenue bars and a trend line",
    kind: "art",
    emoji: "🚗",
    backdrop: "bg-gradient-to-br from-peach via-lavender to-sky",
  },
  "brain-tumor-dashboard": {
    src: "/images/projects/brain-tumor-dashboard.svg",
    alt: "Animated preview of the Brain Tumor Analytics Dashboard showing a scan illustration, analytics tiles and a pulsing signal chart",
    kind: "art",
    emoji: "🧠",
    backdrop: "bg-gradient-to-br from-pink/15 via-lavender to-sky",
  },
}

export function ProjectThumbnail({
  projectId,
  className,
  sizes = "(min-width: 1024px) 560px, 100vw",
  priority = false,
  variant = "fill",
}: {
  projectId: string
  className?: string
  sizes?: string
  priority?: boolean
  /**
   * "fill" suits 16:10 slots, where the artwork matches the frame exactly.
   * "showcase" centres it as a floating window so a taller slot never crops.
   */
  variant?: "fill" | "showcase"
}) {
  const config = thumbnails[projectId]

  if (!config) return null

  const showcase = variant === "showcase"
  const zoom = "transition-transform duration-500 ease-out group-hover:scale-[1.03]"
  const frame =
    "overflow-hidden rounded-xl border border-white shadow-[0_14px_36px_-14px_rgb(15_23_42/0.3)]"

  return (
    <div
      className={cn(
        "relative size-full overflow-hidden",
        config.backdrop,
        showcase && "flex items-center justify-center p-5 sm:p-7",
        className
      )}
    >
      {config.kind === "photo" ? (
        showcase ? (
          <div className={cn("relative aspect-16/10 w-full bg-white", frame, zoom)}>
            <Image
              src={withBasePath(config.src)}
              alt={config.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover object-left-top"
            />
          </div>
        ) : (
          <Image
            src={withBasePath(config.src)}
            alt={config.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover object-left-top", zoom)}
          />
        )
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={withBasePath(config.src)}
          alt={config.alt}
          width={400}
          height={250}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            zoom,
            showcase ? `w-full bg-white ${frame}` : "size-full object-cover"
          )}
        />
      )}

      <span
        aria-hidden
        className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl border border-white bg-white/90 text-base shadow-sm backdrop-blur-sm"
      >
        {config.emoji}
      </span>
    </div>
  )
}
