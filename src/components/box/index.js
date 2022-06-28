import React from "react";
import "./index.css";

const Box = ({ title, imageUrl }) => (
  <div id="box">
    <div className="wrapper">
      <div className="box border rotate">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="box border text">{title}</div>
    </div>
  </div>
);

export default Box;
