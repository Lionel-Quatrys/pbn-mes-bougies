/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.mesbougies.fr",
        pathname: "/wp-content/**",
      },
    ],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
