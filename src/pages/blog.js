import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const IndexPage = ({data}) => {
    const query = data.allMarkdownRemark.edges
    return (
        <Layout>
            <h1>Latest Posts</h1>
            {query.map(post => (
                <div key={ post.node.id }>
                    <hr />
                    <h3>{ post.node.frontmatter.title}</h3>
                    <small>Posted by: {post.node.frontmatter.author} on { post.node.frontmatter.date }</small>
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <hr />
                </div>

            ))}
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default IndexPage
