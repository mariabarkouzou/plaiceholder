const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  images: {
    domains: ["images.unsplash.com"],
  },
  future: {
    webpack5: true,
  },
});
