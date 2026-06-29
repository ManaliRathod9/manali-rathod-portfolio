import type { Metadata } from "next"
import { LifeContent } from "@/components/life-content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Life Outside Work — ${siteConfig.name}`,
  description: "A little more about Manali beyond data, AI, and dashboards.",
}

export default function LifePage() {
  return <LifeContent />
}
