import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

import  * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql `
  query {
    allContentfulGatsbyBlog (
      sort: {
      fields:publishedDate,
      order:DESC
    }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
  `); 

return (
  <Layout>
    <h1>Blog</h1>
   <ol className={blogStyles.post}>
     {data.allContentfulGatsbyBlog.edges.map((edge,id) => {
       return (
         <li key={id.toString()}>
          <Link to={`/blog/${edge.node.slug}`}>
          <h2>{edge.node.title}</h2>
           <p>{edge.node.publishedDate}</p>
          </Link>
         </li>
       )
     })}
   </ol>
  </Layout>
)
}

export default BlogPage;
































