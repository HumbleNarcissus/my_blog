import React from 'react'
import Link from 'gatsby-link'
import { Card, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';

import Layout from '../components/layout'

const IndexPage = ({data}) => {
    const query = data.allMarkdownRemark.edges
    return (
        <Layout>
            <Row>
            {query.map(post => (
                <Col xs="6" sm="4">
                  <Card body className="mt-3">
                    <CardImg top width="100%" src="http://flask.pocoo.org/static/logo/flask.png" alt="Card image cap" />
                    <CardTitle>{post.node.frontmatter.title}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <small><b>{post.node.frontmatter.author}</b> dnia { post.node.frontmatter.date }</small>
                    <Link to={post.node.frontmatter.path}>Czytaj dalej</Link>
                  </Card>
                </Col>
            ))}
            </Row>
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
