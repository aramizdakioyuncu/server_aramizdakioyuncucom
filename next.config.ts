import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // eslint bloğunu sildik, çünkü artık desteklenmiyor
  typescript: {
    // TypeScript hatalarını görmezden gelmek için burası hala geçerli
    ignoreBuildErrors: true,
  },
};
export default nextConfig;