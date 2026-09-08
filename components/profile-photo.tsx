"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { withBasePath } from "@/lib/site"

interface ProfilePhotoProps {
  /** Approximate max rendered size in px, used as an image-loading hint and to scale the fallback initials. */
  size: number
  className?: string
  /** Extra classes for the <img> itself, e.g. a group-hover zoom. */
  imageClassName?: string
  priority?: boolean
  alt?: string
  objectPosition?: string
}

export function ProfilePhoto({
  size,
  className,
  imageClassName,
  priority = false,
  alt = "Manali Rathod",
  objectPosition = "center 20%",
}: ProfilePhotoProps) {
  const [errored, setErrored] = useState(false)

  return (
    <div className={cn("relative size-full overflow-hidden bg-secondary", className)}>
      {errored ? (
        <div className="flex h-full w-full items-center justify-center bg-brand">
          <span
            className="font-mono font-bold tracking-tight text-white"
            style={{ fontSize: size * 0.26 }}
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
          className={cn(
            "object-cover transition-transform duration-500 ease-out",
            imageClassName
          )}
          style={{ objectPosition }}
          priority={priority}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}
