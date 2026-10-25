import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  /** Small monospace label above the title. */
  eyebrow: string
  title: string
  description?: string
  className?: string
  /** Set on dark sections so the text inverts. */
  tone?: "light" | "dark"
  /** Left-aligned by default; "center" centers the whole block. */
  align?: "left" | "center"
  /** A word inside `title` to highlight: mocha-to-lavender gradient on light, glowing lavender on dark. */
  gradientWord?: string
  /** Large editorial section number, e.g. "01". */
  index?: string
  /** "split" puts the description beside the title on large screens. */
  layout?: "stack" | "split"
}

/**
 * Editorial section opener: an oversized serif number joined to the label by a
 * thin metallic rule, then the title. Shared by every major section so the page
 * reads as one numbered publication.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "light",
  align = "left",
  gradientWord,
  index,
  layout = "stack",
}: SectionHeadingProps) {
  const isDark = tone === "dark"
  const isCenter = align === "center"
  const isSplit = layout === "split" && !isCenter

  const titleNode = gradientWord ? (
    title.split(gradientWord).reduce<React.ReactNode[]>((acc, part, i, arr) => {
      acc.push(part)
      if (i < arr.length - 1) {
        acc.push(
          <span key={i} className={isDark ? "text-lavender-glow" : "text-gradient-signature"}>
            {gradientWord}
          </span>
        )
      }
      return acc
    }, [])
  ) : (
    title
  )

  return (
    <div className={cn(isCenter && "mx-auto max-w-2xl text-center", className)}>
      <div className={cn("flex items-end gap-4 sm:gap-5", isCenter && "justify-center")}>
        {index && (
          <span
            aria-hidden
            className={cn("section-index shrink-0 select-none", isDark ? "text-metal" : "text-mocha-gradient")}
          >
            {index}
          </span>
        )}
        <div className={cn("flex min-w-0 items-center gap-3 pb-1.5", !isCenter && "flex-1")}>
          <p className={cn("label-mono shrink-0", isDark ? "text-lavender" : "text-mocha")}>{eyebrow}</p>
          {!isCenter && <span aria-hidden className={cn("flex-1", isDark ? "metal-rule opacity-70" : "metal-rule-steel opacity-80")} />}
        </div>
      </div>

      <div className={cn("mt-6", isSplit && "grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10")}>
        <h2
          className={cn(
            "text-[2rem] leading-[1.06] font-extrabold tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3rem]",
            isDark ? "text-ivory" : "text-espresso",
            isSplit ? "lg:col-span-7" : "max-w-3xl",
            isCenter && "mx-auto"
          )}
        >
          {titleNode}
        </h2>
        {description && (
          <p
            className={cn(
              "text-lg leading-relaxed",
              isDark ? "text-platinum/80" : "text-subtle",
              isSplit ? "lg:col-span-5 lg:pb-1.5" : "mt-4 max-w-2xl",
              isCenter && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
