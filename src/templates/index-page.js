import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Box from "../components/box";

export const IndexPageTemplate = ({ title, imageUrl }) => (
  <div id="index-page">
    <Box title={title} imageUrl={imageUrl} />
  </div>
);

const IndexPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
    },
  },
}) => (
  <Layout>
    <IndexPageTemplate title={title} imageUrl={image.publicURL} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: {
        title: PropTypes.string,
        image: PropTypes.object,
      },
    }),
  }),
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;
