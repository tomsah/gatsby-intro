/**@JSX  jsx*/
import React from 'react'
import {graphql} from 'gatsby'
import {css, jsx} from '@emotion/core'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'

//$slug is set in the context, see gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

// when query comes back its result is available to us as data
// we have destructed data to mdx and aliased mdx to post
const PostTemplate = ({data: {mdx: post}}) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}>
        Posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}

export default PostTemplate
