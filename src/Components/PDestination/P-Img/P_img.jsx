import React from "react";
import "./P_img.css";
import Img1 from "../../../assets/1.jpg";
import Img2 from "../../../assets/2.jpg";

const P_img = ({ img }) => {
  return (
    <>
      <div className="right-img">
        <img className="img1" src={Img1} alt="" />
        <img className="img2" src={Img2} alt="" />
      </div>
    </>
  );
};

export default P_img;
