const path = require("path");

module.exports = {
  i18n: {
    localeDetection: false,
    locales: ["en-US", "es-ES", "pt-BR"],
    defaultLocale: "es-ES",
    localePath: path.resolve("./public/locales"),
  },
};
