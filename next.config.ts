import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Portfolio_AI" : "",
  assetPrefix: isProd ? "/Portfolio_AI/" : "",
};

export default nextConfig;
