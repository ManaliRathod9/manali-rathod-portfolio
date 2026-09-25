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
  title: "AI Product, AI Engineering and Machine Learning",
  /** Browser and search description for the homepage. */
  description:
    "Manali Rathod works on AI from the product side and the model side: AI product, AI engineering, machine learning, forward deployed engineering, AI research, and data engineering.",
  location: "Bloomington, IN",
  email: "manali.r@myworkprofiles.com",
  phone: "+1 8126793058",
  resumeHref: withBasePath("/resume/manali-rathod-resume.pdf"),
  social: {
    github: "https://github.com/ManaliRathod9",
    linkedin: "https://www.linkedin.com/in/manali-rathod-1128a5202/",
    instagram: "#",
    x: "#",
  },
} as const
