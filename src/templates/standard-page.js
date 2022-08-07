import React from "react";
import PropTypes, { string } from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Box from "../components/box";
import { HTMLContent } from "../components/content";

import "./standard-page.css";

// eslint-disable-next-line
export const StandardPageTemplate = ({ title, html }) => (
  <div id="standard-page">
    <section>
      <h2 class="heading">{title}</h2>
      <div className="content">
        <HTMLContent content={html} />
      </div>
    </section>
  </div>
);

StandardPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};

const StandardPage = ({ pageContext }) => (
  <Layout {...pageContext}>
    <StandardPageTemplate {...pageContext} />
  </Layout>
);

StandardPage.propTypes = {
  pageContext: PropTypes.shape({
    title: string,
    html: string,
  }),
};

export default StandardPage;
