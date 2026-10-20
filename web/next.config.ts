import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One static page per locale — output goes to `out/` and can be served by any static host.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
