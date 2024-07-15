/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.BASE_PATH,
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
