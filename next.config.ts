import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true
  },
  
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'frontcore.com'
      },
      {
        protocol: 'https',
        hostname: 'capable-dogfish-903.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      }
    ]
  }
};

export default nextConfig;
