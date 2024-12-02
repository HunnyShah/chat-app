/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/conversations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
