import React from "react";
import "./Recent_trip.css";
import Cards from "../Cards/Cards";

const Recent_trip = () => {
  return (
    <>
      <div className="recent-trip">
        <div className="trip-header">
          <h1>Recent Trips</h1>
          <p>You can discover unique destinations using Google Maps.</p>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Recent_trip;
