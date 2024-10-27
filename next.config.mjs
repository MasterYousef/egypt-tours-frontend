/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://egypt-tours-frontend.vercel.app',
      },
    ],
  },
};

export default nextConfig;
