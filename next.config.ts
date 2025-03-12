import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    formats:['image/avif','image/webp'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port:'',
        pathname:'/t/p/**'
      },
    ],
  }
};

export default nextConfig;
