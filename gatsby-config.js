// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "A simple site built with Gatsby",
    author: "Muhammad Mudassir",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`, // Folder for markdown files
      },
    },
    "gatsby-transformer-remark", // Parses markdown files into data
    "gatsby-plugin-react-helmet", // For managing document head
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
  pathPrefix: "/Gatsby-Site-Project-", //
};
// module.exports = {
//   plugins: [
//     {
//       resolve: "gatsby-source-filesystem",
//       options: {
//         name: "posts",
//         path: `${__dirname}/src/posts/`,
//       },
//     },
//     "gatsby-transformer-remark",
//   ],
// }
