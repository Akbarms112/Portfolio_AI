export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const prefix = isProd ? "/Portfolio_AI" : "";
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return path.startsWith("/") ? `${prefix}${path}` : `${prefix}/${path}`;
};
