import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../footer";
import Navbar from "../navbar";
import "./index.css";
import useSiteMetadata from "../site-metadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children, slug }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div id="outer-container">
        <Navbar />
        <main id="page-wrap">
          {slug && <h1 id="header">David &amp; Charlie</h1>}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default TemplateWrapper;
