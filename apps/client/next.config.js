module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui,database,problems,types,store,utils"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
