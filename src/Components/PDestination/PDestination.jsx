import React from "react";
import "./PDestination.css";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";

const PDestination = () => {
  return (
    <>
      <div className="P-Destination">
        <div className="P-Destination-Text">
          <h1>Popular Destinations</h1>
          <p>
            Tours give you the opportunity to see a lot, within a time frame.
          </p>
        </div>
        <div className="P-Destination-content">
          <div className="left-text">
            <h4>Taal Volcano, Batangas</h4>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boats a volcano
              inside a lake inside an island. If you fancy a closer look, the
              hike uo to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you'll see
              the peculiar environment found on an active volcano,including
              volcanic rocks and stream vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind with some bulalo
              before heading back home.
            </p>
          </div>
          <div className="right-img">
            <img className="img1" src={Img1} alt="" />
            <img className="img2" src={Img2} alt="" />
          </div>
        </div>
        <div className="P-Destination-content">
          <div className="right-img">
            <img className="img1" src={Img3} alt="" />
            <img className="img2" src={Img4} alt="" />
          </div>
          <div className="left-text">
            <h4>Mt. Daguldul, Batangas</h4>
            <p>
              If you're looking for a hike that's a little more challenging but
              still good for a beginner mountaineer, Check out Mt. Daguldul in
              san juan, Batangas. You'll start your hike from the beach and pass
              through tropical forest, diffrent rock fromations, and small
              streams. There's a small store halfway up the trail where you can
              take a break and drink buko juice, and though the summit itself
              may not have the best view, the breeze is fantastic. Once you've
              made it back down, head straight to the beach for a refreshing,
              well-deserved swim.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PDestination;
