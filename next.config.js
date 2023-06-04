/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
