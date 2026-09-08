import { Hero } from "@/components/hero"
import { RoleStrip } from "@/components/role-strip"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Workflow } from "@/components/workflow"
import { About } from "@/components/about"
import { GithubBanner } from "@/components/github-banner"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <RoleStrip />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Workflow />
      <About />
      <GithubBanner />
      <Contact />
    </>
  )
}
