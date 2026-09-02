import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
      }
    : {}),
};

export default nextConfig;
