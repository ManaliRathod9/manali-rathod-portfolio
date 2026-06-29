"use client"

import { useEffect, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
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

  if (!isClient) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image preview"
              data-cursor="button"
              className="absolute -top-3 -right-3 z-10 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <X className="size-4" />
            </button>
            <ProfilePhoto
              size={320}
              priority
              alt="Manali Rathod profile photo"
              className="size-56 sm:size-72 lg:size-80"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
