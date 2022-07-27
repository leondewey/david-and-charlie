import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { pushRotate as Menu } from "react-burger-menu";

import "./index.css";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "standard-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              templateKey
            }
          }
        }
      }
    }
  `);

  const pages = data.allMarkdownRemark.edges.map((edge) => ({
    title: edge.node.frontmatter.title,
    href: edge.node.frontmatter.slug,
  }));

  return (
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      <a className="menu-item" href="/">
        Home
      </a>
      {pages.map(({ href, title }) => (
        <a key={href} className="menu-item" href={href}>
          {title}
        </a>
      ))}
    </Menu>
  );
};

export default Navbar;
