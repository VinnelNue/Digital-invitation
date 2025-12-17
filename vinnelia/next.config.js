/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // <-- enable static export for Netlify
};

module.exports = nextConfig;
