// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Put SVGR FIRST so it wins for TS/JS imports of .svg
    config.module.rules.unshift({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // only when imported from TS/JS files
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeDimensions", active: true },
                { name: "convertColors", params: { currentColor: true } },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
