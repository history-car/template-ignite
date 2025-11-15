import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin/turbopack";

const nextConfig: NextConfig = {
  /* config options here */
};

export default stylexPlugin({
  rsOptions: {
    dev: process.env.NODE_ENV !== "production",
  },
})(nextConfig);
