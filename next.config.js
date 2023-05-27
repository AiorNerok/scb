/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com"
            },
            {
                hostname: 'images.hobbydb.com'
            },
            {
                hostname: "upload.wikimedia.org"
            }
        ]
    }
}

module.exports = nextConfig
