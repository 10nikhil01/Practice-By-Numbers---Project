import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "practicenumbers.com",
      },
    ],
  },
};

export default nextConfig;
