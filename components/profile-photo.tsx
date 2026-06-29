"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { withBasePath } from "@/lib/site"

interface ProfilePhotoProps {
  /** Approximate max rendered size in px, used as an image-loading hint and to scale the fallback initials. */
  size: number
  className?: string
  glow?: boolean
  priority?: boolean
  shape?: "circle" | "rounded"
  alt?: string
}

export function ProfilePhoto({
  size,
  className,
  glow = true,
  priority = false,
  shape = "circle",
  alt = "Manali Rathod",
}: ProfilePhotoProps) {
  const [errored, setErrored] = useState(false)
  const radius = shape === "circle" ? "rounded-full" : "rounded-2xl"

  return (
    <div className={cn("relative shrink-0", className)}>
      {glow && (
        <div aria-hidden className={cn("absolute inset-0 -z-10 bg-cyan-400/20 blur-2xl", radius)} />
      )}
      <div
        className={cn(
          "relative size-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_0_4px_rgba(34,211,238,0.1),0_0_36px_6px_rgba(34,211,238,0.25)]",
          radius
        )}
      >
        {errored ? (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/25 via-violet-500/25 to-fuchsia-500/20">
            <span
              className="text-gradient font-mono font-bold"
              style={{ fontSize: size * 0.32 }}
            >
              MR
            </span>
          </div>
        ) : (
          <Image
            src={withBasePath("/images/manali-profile.png")}
            alt={alt}
            fill
            sizes={`${size}px`}
            className="object-cover object-[center_22%]"
            priority={priority}
            onError={() => setErrored(true)}
          />
        )}
      </div>
    </div>
  )
}
