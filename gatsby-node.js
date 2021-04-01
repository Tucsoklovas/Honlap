const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query GetVersenyzok {
      competitors: allContentfulVersenyzok {
        nodes {
          slug
        }
      }
    }
  `)
    result.data.competitors.nodes.forEach(person => {
        createPage({
            path: `/Competitors/${person.slug}`,
            component: path.resolve(`src/templates/competitors-template.js`),
            context: {
                slug: person.slug,
            },
        })
    })
}
