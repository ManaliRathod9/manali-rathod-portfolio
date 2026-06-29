import type { Metadata } from "next"
import { WhyHireMeContent } from "@/components/why-hire-me-content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Why You Should Hire Me — ${siteConfig.name}`,
  description: "A simple view of how Manali works and what she can bring to a team.",
}

export default function WhyHireMePage() {
  return <WhyHireMeContent />
}
