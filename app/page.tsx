import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { TeachingExperience } from "@/components/teaching-experience"
import { Skills } from "@/components/skills"
import { Workflow } from "@/components/workflow"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { GithubBanner } from "@/components/github-banner"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TeachingExperience />
      <Workflow />
      <Skills />
      <Education />
      <Projects />
      <GithubBanner />
      <Contact />
    </>
  )
}
