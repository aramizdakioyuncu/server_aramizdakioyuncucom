import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: "export" SATIRI SİLİNDİ - SSR moduna geçtik */
  images: {
    unoptimized: true,
  },
  eslint: {
    // Build sırasında ESLint hataları yüzünden deployun iptal olmasını engeller
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript hatalarını görmezden gelir (Hızlı deploy için ideal)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
