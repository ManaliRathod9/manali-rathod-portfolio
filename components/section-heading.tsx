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
  /** A word inside `title` to render with the signature blue-to-teal gradient. */
  gradientWord?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "light",
  align = "left",
  gradientWord,
}: SectionHeadingProps) {
  const isDark = tone === "dark"
  const isCenter = align === "center"

  const titleNode = gradientWord ? (
    title.split(gradientWord).reduce<React.ReactNode[]>((acc, part, index, arr) => {
      acc.push(part)
      if (index < arr.length - 1) {
        acc.push(
          <span key={index} className="text-gradient-signature">
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
    <div className={cn("max-w-2xl", isCenter && "mx-auto max-w-2xl text-center", className)}>
      <p
        className={cn(
          "label-mono inline-flex items-center gap-2 rounded-lg px-2.5 py-1",
          isDark ? "bg-white/10 text-white/80" : "bg-brand/8 text-brand"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-[1.75rem] font-extrabold sm:text-[2.125rem]",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {titleNode}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-lg leading-relaxed",
            isDark ? "text-white/70" : "text-muted",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
