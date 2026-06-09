/** @type {import('next').NextConfig} */
const nextConfig = {
  // 完全静的書き出し（SSG）- AdSenseクローラー対策
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
