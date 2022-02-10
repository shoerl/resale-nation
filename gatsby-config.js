module.exports = {
  siteMetadata: {
    siteUrl: "https://www.theresalenation.com",
    title: "Resale Nation",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `crc159zzt4oh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "16x11v37XHyuiwYHbgqIyXb9w80-BgJGqPlTQnrLODU",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
