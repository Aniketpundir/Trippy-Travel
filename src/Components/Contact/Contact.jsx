import React from "react";
import "./Contact.css";
import img from "../../assets/2.jpg";
import SecImag from "../secImage/SecImage";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <SecImag image={img} name="Contact" />
        <div className="form">
          <h1>Send a message to us!</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input className="Message" type="text" placeholder="Message" />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
