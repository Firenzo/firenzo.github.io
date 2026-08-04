export const ASSET_URL =
  process.env.NODE_ENV === "development"
    ? (import.meta.env.ASSET_URL ?? "")
    : "";

export const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? (import.meta.env.BASE_PATH ?? "")
    : "";

export const CMS_URL = process.env.CMS_URL ?? "";

export const getAssetURL = (imageUrl: string | null | undefined) => {
  if (!imageUrl) return imageUrl;
  return ASSET_URL + BASE_PATH + imageUrl;
};

export const getPageUrl = (pageUrl: string) => {
  return BASE_PATH + pageUrl;
};

export const isRelativePath = (url: string): boolean => {
  // Regex explanation:
  // ^[a-z0-9+.-]+:    Matches valid protocol-characters at the beginning (ex. http, https, ftp, mailto)
  // :                 Followed by a colon
  // |                 OR
  // ^\/\/             Starts with two slashes (protocol-relative URL like //example.com)
  const absoluteRegex = /^[a-z0-9+.-]+:|^\/\//i;

  return !absoluteRegex.test(url.trim());
};
