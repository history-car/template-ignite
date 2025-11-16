import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin";
import { join } from "node:path";

// Bundle analyzer (optional, enabled with ANALYZE=true)
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* Performance optimizations */

  // Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Image optimization
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compress: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "@stylexjs/stylex"],
  },
};

export default withBundleAnalyzer(
  stylexPlugin({
    rsOptions: {
      aliases: {
        "@/*": [join(__dirname, "src/*")],
      },
      unstable_moduleResolution: {
        type: "commonJS",
      },
      runtimeInjection: false,
      treeshakeCompensation: true,
    },
    stylexImports: ["stylex", "@stylexjs/stylex"],
  })(nextConfig)
);
