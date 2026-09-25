import type { Metadata } from "next"
import { WhyHireMeContent } from "@/components/why-hire-me-content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Why Work With Me - ${siteConfig.name}`,
  description:
    "How Manali works through an AI problem: start where the user hesitates, trace the answer end to end, and test whether a change helps people finish the task.",
}

export default function WhyHireMePage() {
  return <WhyHireMeContent />
}
