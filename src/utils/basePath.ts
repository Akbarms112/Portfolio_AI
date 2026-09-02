const BASE_PATH = "/Portfolio_AI";

export const getAssetPath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }

  // In production build or GitHub Pages deployment
  if (process.env.NODE_ENV === "production" || (typeof window !== "undefined" && window.location.hostname.includes("github.io"))) {
    return `${BASE_PATH}${cleanPath}`;
  }

  return cleanPath;
};
