/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "cllk",
    "@llampukaq/realm",
    "@llampukaq/realm-google-provider",
    "@llampukaq/realm-organizations",
    "@llampukaq/builder",
    "@llampukaq/icons",
    "@llampukaq/realm-email-provider",
  ],
};

export default nextConfig;
