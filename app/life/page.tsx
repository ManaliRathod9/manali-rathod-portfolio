import type { Metadata } from "next"
import { LifeContent } from "@/components/life-content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Life Outside Work - ${siteConfig.name}`,
  description: "What Manali enjoys outside work: travel, badminton, cooking, the gym, and sharing everyday life online.",
}

export default function LifePage() {
  return <LifeContent />
}
