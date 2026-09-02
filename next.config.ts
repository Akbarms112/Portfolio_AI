import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio_AI",
  assetPrefix: "/Portfolio_AI/",
};

export default nextConfig;
