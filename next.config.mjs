/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'egypt-tours-frontend.vercel.app',
      },
    ],
  },
};

export default nextConfig;
