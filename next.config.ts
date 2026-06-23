import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "practicenumbers.com",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
