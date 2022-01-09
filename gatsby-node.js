const path = require('path')

exports.createPages = async gatsbyUtilities => {
    const posts = await getPosts(gatsbyUtilities)
    await createHomePage({ posts, gatsbyUtilities })
}

async function createHomePage({ posts, gatsbyUtilities }) {
  await gatsbyUtilities.actions.createPage({
      path: `/`,
      component: path.resolve('./src/templates/home-template.js'),
      context : {
          posts: posts
      }
  })

}

async function getPosts({ graphql, reporter }) {
    const graphqlResult = await graphql(`
    query MyQuery {
  allContentfulBlogPost {
    nodes {
      title
      createdAt
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
      }
    }
  }
}`)
    return graphqlResult.data.allContentfulBlogPost.nodes
}
