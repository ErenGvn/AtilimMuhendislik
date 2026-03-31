/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images served from any HTTPS domain (e.g. Cloudinary, Supabase storage)
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    // Fallback for missing local images — show placeholder SVG
    // (images are served from /public, so 404s will just return Next.js 404)
  },
};

module.exports = nextConfig;
