/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <<< ini WAJIB untuk bisa static export
  images: {
    unoptimized: true, // <<< ini WAJIB untuk <Image /> saat export statik
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
