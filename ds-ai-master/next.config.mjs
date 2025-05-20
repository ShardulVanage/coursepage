/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    images: {
        domains: [
        "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        "res.cloudinary.com",
        "images.unsplash.com",
        ]
}
}

export default nextConfig;
