import React from "react";
import "./Service.css";
import SecImage from "../secImage/SecImage";
import img from "../../assets/10.jpg";
import Recent_trip from "../Recent_trip/Recent_trip";

const Service = () => {
  return (
    <>
      <div className="service">
        <SecImage image={img} name="Service" />
        <div className="service-section">
          <Recent_trip />
        </div>
      </div>
    </>
  );
};

export default Service;
