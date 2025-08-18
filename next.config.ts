import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash görsellerine izin ver
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }, // bazen kullanılıyor
    ],
  },
};

export default nextConfig;
