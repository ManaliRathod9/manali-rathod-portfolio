import type { NextConfig } from "next";

const repoName = "manali-rathod-portfolio";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  // Dev server only: let the "Network" URL (e.g. 192.168.0.199:3000, or a phone on the same
  // Wi-Fi) load dev resources. Without this, Next blocks them, the page never hydrates, and
  // scroll-revealed content stays hidden until the 4s fallback in the root layout.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
