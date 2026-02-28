import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "kajabi-storefronts-production.kajabi-cdn.com" },
    ],
  },
};

export default nextConfig;
