/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "www.fillmurray.com",  // Add the domain for the first image source
      "www.placecage.com",    // Add the domain for the second image source
      "www.lorempixel.com",   // Add the domain for the third image source
    ],
  },
};

module.exports = nextConfig;
