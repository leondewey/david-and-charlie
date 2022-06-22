import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Box from "../components/box";
import { HTMLContent } from "../components/content";

import "./standard-page.css";

// eslint-disable-next-line
export const StandardPageTemplate = ({ title, heading, html }) => (
  <div id="standard-page">
    <section>
      <h2>{heading}</h2>
      <HTMLContent content={html} />
    </section>
  </div>
);

StandardPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};

const StandardPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <StandardPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        html={html}
      />
    </Layout>
  );
};

StandardPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default StandardPage;

export const pageQuery = graphql`
  query StandardPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "standard-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`;
