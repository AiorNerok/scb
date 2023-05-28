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
            },
            {
                hostname: "media.istockphoto.com "
            },
            {
                hostname: "media.istockphoto.com"
            }
        ]
    }
}

module.exports = nextConfig
