import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false, // pages export as privacy.html and support.html
  images: { unoptimized: true },
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,
};

export default nextConfig;
