import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tianjiao Shi — AI Product & Design",
  description:
    "AI product thinking, human-centered design, and spatial expertise. Explore TerraBench, Café Nomade, and Tianjiao Shi’s spatial and 3D work.",
  ...(process.env.GITHUB_PAGES === "true"
    ? {}
    : { other: { "codex-preview": "development" } }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const style = {
    "--hero-silk": `url("${basePath}/hero-silk.webp")`,
  } as CSSProperties;
  return (
    <html lang="en">
      <body style={style}>{children}</body>
    </html>
  );
}
