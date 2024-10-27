/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'egypt-tours-backend.vercel.app',
      },
    ],
  },
};

export default nextConfig;
