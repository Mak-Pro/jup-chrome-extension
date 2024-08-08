/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },

  reactStrictMode: true,

  sassOptions: {
    prependData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dd.dexscreener.com",
        port: "",
        pathname: "/ds-data/tokens/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dexscreener.com",
        port: "",
        pathname: "/cms/**",
      },
      {
        protocol: "https",
        hostname: "clicker-api.techchaininnovations.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "clicker-api.techchaininnovations.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "jupperapi.jup.bot",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jupperapi.jup.bot",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
