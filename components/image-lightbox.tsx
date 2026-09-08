"use client"

import { useEffect, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { ProfilePhoto } from "@/components/profile-photo"

interface ImageLightboxProps {
  open: boolean
  onClose: () => void
}

const noop = () => () => {}

function useIsClient() {
  return useSyncExternalStore(noop, () => true, () => false)
}

export function ImageLightbox({ open, onClose }: ImageLightboxProps) {
  const isClient = useIsClient()

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!isClient || !open) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Profile photo"
      onClick={onClose}
      className="on-dark fixed inset-0 z-100 flex items-center justify-center bg-navy/88 p-6"
    >
      <div onClick={(event) => event.stopPropagation()} className="relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          autoFocus
          className="absolute -top-4 -right-4 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-navy text-white transition-colors hover:bg-white hover:text-ink"
        >
          <X className="size-4.5" />
        </button>
        <ProfilePhoto
          size={460}
          priority
          alt="Manali Rathod profile photo"
          className="h-80 w-64 rounded-2xl border-2 border-white/20 sm:h-[26rem] sm:w-[21rem]"
        />
      </div>
    </div>,
    document.body
  )
}
