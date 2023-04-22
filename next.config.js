/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "backend.crfimmadagascar.org",
      "crfimmadagascar.org",
      "localhost",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // pathname: "storage/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
