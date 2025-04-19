import React from "react";
import "./SecImage.css";

const SecImage = (props) => {
  return (
    <>
      <div className="main-image">
        <img src={props.image} />
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default SecImage;
