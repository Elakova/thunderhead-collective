import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  // Set NEXT_PUBLIC_BASE_PATH (e.g. "/thunderhead-collective") when hosting under a sub-path like GitHub Pages.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  devIndicators: false,
  experimental: { agentUpgrade: "security" },
};

export default nextConfig;
