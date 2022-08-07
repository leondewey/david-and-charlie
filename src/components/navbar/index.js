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
              order
            }
          }
        }
      }
    }
  `);

  const pages = [
    { href: "/", title: "Home" },
    ...data.allMarkdownRemark.edges.map((edge) => ({
      title: edge.node.frontmatter.title,
      href: edge.node.frontmatter.slug,
      order: edge.node.frontmatter.order,
    })),
  ];

  return (
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      {pages
        .sort((a, b) => a.order - b.order)
        .map(({ href, title }) => (
          <Link
            key={href}
            className="menu-item"
            to={href}
            activeStyle={{ textDecoration: "underline" }}
            partiallyActive={href === "/" ? false : true}
          >
            {title}
          </Link>
        ))}
    </Menu>
  );
};

export default Navbar;
