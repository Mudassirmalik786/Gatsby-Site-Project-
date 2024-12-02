/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { createFilePath } = require("gatsby-source-filesystem");

/**
 * Implement the `onCreateNode` API to add a slug field to Markdown nodes.
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Add slugs to MarkdownRemark nodes
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

/**
 * Implement the `createPages` API to generate pages for Markdown posts.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all Markdown nodes and their slugs
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Could not query Markdown nodes.");
  }

  // Create pages for each Markdown node
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Example: DSG page (optional, as in your original code)
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};
