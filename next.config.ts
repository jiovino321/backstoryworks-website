const nextConfig = {
  // Temporarily disable static export for deployment
  // output: "export",
  images: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
