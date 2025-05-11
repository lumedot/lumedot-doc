/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.lumedot.com',
          pathname: '/**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },
    poweredByHeader: false,
    allowedDevOrigins: ["http://localhost:3000"],
  };
  
  export default nextConfig;
  