const withTM = require('next-transpile-modules')(['three'])
const shouldAnalyzeBundles = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}
if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
    require('next-bundle-analyzer')(/* options come there */);
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = withTM(nextConfig)
