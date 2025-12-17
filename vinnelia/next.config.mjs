/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/open',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;