import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActions ? "/Portfolio_AI" : "",
  assetPrefix: isGitHubActions ? "/Portfolio_AI/" : "",
};

export default nextConfig;
