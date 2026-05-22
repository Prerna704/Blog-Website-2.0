const RAW_API_BASE =
  process.env.REACT_APP_API_BASE_URL ||
  "https://blog-website-2-0-7et4.onrender.com";

const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

export function apiUrl(path) {
  if (!path) return API_BASE || "";
  if (!API_BASE) return path;
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
