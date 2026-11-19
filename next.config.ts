import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  devIndicators: false,
  experimental: { agentUpgrade: "security" },
};

export default nextConfig;
