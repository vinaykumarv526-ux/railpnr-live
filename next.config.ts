import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  basePath = '/railpnr-live';
  assetPrefix = '/railpnr-live/';
}

const nextConfig: NextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
