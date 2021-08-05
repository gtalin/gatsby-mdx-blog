const siteMetadata = {
  title: `Aruj's notes`,
  siteName: `Aruj's notes`,
  description: `These are my notes based on something I've learned or something new I am learning.`,
  image: `/default-site-image.jpg`,
  siteUrl: `http://localhost:8000`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@gtalinn`,
  authorName: `Aruj Joshi`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400'],
            },
            {
              family: 'Baloo 2',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};
