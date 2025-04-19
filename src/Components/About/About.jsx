import React from "react";
import "./About.css";
import SecImage from "../secImage/SecImage";
import img from "../../assets/night.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <SecImage image={img} name="About" />
        <div className="about-text">
          <div className="text">
            <h1>Our History</h1>
            <p>
              Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading
              brand in web designing sevices and e-commerce solutions. Trippy
              .In Pvt Lid. is counted for its experties in web solutions and its
              top ranking portals. Our invincible expertise and rich experience
              has raised our spirit to reach ahead from our client's
              expectation. Commendable success rate of other portals managed by
              Trippy is a live paradigm of our work excellence.
            </p>
          </div>
          <div className="text">
            <h1>Our Mission</h1>
            <p>
              Our mission is to touch the hoeizon where our capabilities may
              successfully meet with the requirements of our clients, that too
              with ultimate transparency and cost-effectiveness.
            </p>
          </div>
          <div className="text">
            <h1>Our Vision</h1>
            <p>
              To saw the seeds of par-excellence services with customer centric
              approach and reap the trust of worldwide clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
