// Prefix for files in /public when the site is served from a sub-path
// (e.g. GitHub Pages at /thunderhead-collective). Empty locally and on a root domain.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
