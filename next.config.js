const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["tsx"],
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.githubusercontent.com",
      "pbs.twimg.com",
      "raw.githubusercontent.com",
      "camo.githubusercontent.com",
      "github.com",
      "wallpapercave.com",
    ],
  },
};
