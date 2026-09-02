import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tianjiao Shi — 3D Spatial Quality & Evaluation",
  description: "Real-world spatial rules, quality evaluation and data workflows for AI-generated environments.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
