import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PORT: '8080',
    HOSTNAME:'0.0.0.0',
  }
};

export default nextConfig;
