import React from "react";
import PropTypes from "prop-types";
import { StandardPageTemplate } from "../../templates/standard-page";

const StandardPagePreview = ({ entry }) => {
  const { title, body } = entry.getIn(["data"]).toJS();
  return <StandardPageTemplate title={title} html={body} />;
};

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default StandardPagePreview;
