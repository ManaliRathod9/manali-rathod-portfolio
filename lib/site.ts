const repoName = "manali-rathod-portfolio"
const isGithubPages = process.env.GITHUB_ACTIONS === "true"
export const basePath = isGithubPages ? `/${repoName}` : ""

export function withBasePath(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

export const siteConfig = {
  name: "Manali Rathod",
  title: "Data Analyst • AI/ML Builder • Research Data Tool Developer",
  intro:
    "I build practical data and AI tools for research, analytics, and real users. My work includes research data cleaning, dashboards, ML workflows, AI study tools, and full-stack apps that make messy information easier to use.",
  location: "Bloomington, IN",
  email: "manalidr93@gmail.com",
  phone: "+1 8126793058",
  resumeHref: withBasePath("/resume/manali-rathod-resume.pdf"),
  social: {
    github: "https://github.com/ManaliRathod9",
    linkedin: "https://www.linkedin.com/in/manali-rathod-1128a5202",
    instagram: "#",
    x: "#",
  },
} as const
