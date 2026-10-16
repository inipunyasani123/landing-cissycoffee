/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gambar statis, tanpa Image Optimization Vercel (kuota bulanan tim habis per 16 Okt 2026 dan
  // URL /_next/image yang belum ter-cache dibalas 402). Varian WebP ada di public/_img/ dan dipetakan
  // oleh image-loader.js lewat image-manifest.json. Setelah menambah/mengganti gambar di public/images:
  //   node scripts/static-images.mjs . --dirs public/images
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [{ source: '/_img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
  // Rute lama berbahasa Inggris dipindah ke rute Indonesia; /portfolio dan
  // /services dulu berisi isi template yang tidak berkaitan dengan kedai kopi.
  async redirects() {
    return [
      { source: "/about", destination: "/tentang", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
      { source: "/services", destination: "/acara", permanent: true },
      { source: "/services/:path*", destination: "/acara", permanent: true },
      { source: "/portfolio", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
