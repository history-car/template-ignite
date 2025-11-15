import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin";
import { join, resolve } from "node:path";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
};

export default stylexPlugin({
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
})(nextConfig);
