import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
   query($slug: String!) {
     contentfulGatsbyBlog(slug: {eq: $slug}) { 
       title
       publishedDate(formatString: "MMM Do, YYYY" )
     }
   }
`

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulGatsbyBlog.title}</h1>
      <p>{props.data.contentfulGatsbyBlog.publishedDate}</p>   
      </Layout>
  )
}

export default Blog;
