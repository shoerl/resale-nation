const path = require('path')

exports.createPages = async gatsbyUtilities => {
    const posts = await getPosts(gatsbyUtilities)
    posts.forEach((post, index) => { post['id'] = index + 1 })

    await createHomePage({ posts, gatsbyUtilities })
    await createIndividualPostPages({ posts, gatsbyUtilities })
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

async function createIndividualPostPages({ posts, gatsbyUtilities }) {
     await Promise.all(posts.map( (post)  => {
        gatsbyUtilities.actions.createPage({
            path: '/posts/' + post['id'],
            component: path.resolve('./src/templates/blog-post-template.js'),
            context : {
                post: post
            }
        })
    }))
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
