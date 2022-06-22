import React from "react";
import "./index.css";

function Box({ heading }) {
  return (
    <div id="box">
      <div class="wrapper">
        <div className="box border rotate">
          <div className="image" />
        </div>
        <div className="box border text">{heading}</div>
      </div>
    </div>
  );
}

export default Box;
