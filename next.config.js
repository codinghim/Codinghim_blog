/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'assets.vercel.com',
            port: '',
            pathname: '/image/upload/**',
            },
            {
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            pathname: '/**',
            },
        ]
    },
}

module.exports = nextConfig
