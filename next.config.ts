import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'frontcore.com'
      },
      {
        protocol: 'https',
        hostname: 'capable-dogfish-903.convex.cloud'
      }
    ]
  }
};

export default nextConfig;
