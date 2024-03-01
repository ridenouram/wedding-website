/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `wedding`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "ridenour-forst-wedding",
        accessToken: process.env.PRISMIC_API_ACCESS_TOKEN,

        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
      },
    },
  ],
};
