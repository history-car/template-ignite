import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin/turbopack";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
};

export default stylexPlugin({
  rsOptions: {
    dev: process.env.NODE_ENV !== "production",
    // Default: undefined
    unstable_moduleResolution: {
      // The module system to be used.
      // Use this value when using `ESModules`.
      type: "commonJS",
      // The absolute path to the root directory of your project.
      // Only used as a fallback
      rootDir: resolve(__dirname, "src"), // the base directory for your source files
    },
  },
})(nextConfig);
