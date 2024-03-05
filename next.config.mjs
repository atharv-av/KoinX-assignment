/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.coingecko.com',
            port: '',
            pathname: '**', // Allow all paths under assets.coingecko.com
          },
        ],
      },
};

export default nextConfig;
