"use client";

import { useEffect } from "react";
import { initializePortfolio } from "./portfolio-runtime";

export default function PortfolioInteractions() {
  useEffect(() => initializePortfolio(), []);
  return null;
}
