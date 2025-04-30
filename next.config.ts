import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // React Strict Mode
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
