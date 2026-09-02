export const getAssetPath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  
  // Next.js automatically prepends basePath from next.config.ts in production
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Only add prefix if explicitly running in GitHub Actions build without Next.js Image handling
  const isGitHubActions = typeof window !== "undefined" && window.location.hostname.includes("github.io");
  const prefix = isGitHubActions ? "/Portfolio_AI" : "";

  return `${prefix}${cleanPath}`;
};
