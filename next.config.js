/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  output: 'export',
}

module.exports = nextConfig
