import * as React from "react";
import { Link } from "gatsby";
import Counter from "./counter";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function Home({ data }) {
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Hello world! It's me {data.site.siteMetadata.title}</h1>
        <h2>Author: {data.site.siteMetadata.author}</h2>
        <Link style={{ fontSize: 20, textDecoration: "none" }} to="/page-2/">
          Page 2
        </Link>
      </div>
      <Counter />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h3>From file: {node.frontmatter.title}</h3>
      ))}

      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Pretty Size</th>
            <th>Extension</th>
            <th>Birth Time</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }) => (
            <tr>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

// export const query = graphql`
//   query FirstQuery {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query FirstQuery {
//     allFile {
//       edges {
//         node {
//           extension
//           relativePath
//           birthTime(fromNow: true)
//           prettySize
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile {
      edges {
        node {
          extension
          relativePath
          birthTime(fromNow: true)
          prettySize
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
