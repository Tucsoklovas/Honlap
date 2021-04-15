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
      },
      story: allContentfulTortenetek {
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
    result.data.story.nodes.forEach(story => {
        createPage({
            path: `/Pictures/${story.slug}`,
            component: path.resolve(`src/templates/pictures-template.js`),
            context: {
                slug: story.slug,
            },
        })
    })
}
