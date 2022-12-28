const withTM = require('next-transpile-modules')(['three'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = withTM(nextConfig)
