import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main-content">
          <div className="upper-content">
            <div className="upper-left">
              <h1>Trippy</h1>
              <p>Choose your favourite destinations.</p>
            </div>
            <div className="upper-right">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-mini-boxes">
              <h3>Projects</h3>
              <p>Changelog</p>
              <p>Status</p>
              <p>License</p>
              <p>All Versions</p>
            </div>
            <div className="footer-mini-boxes">
              <h3>Community</h3>
              <p>Github</p>
              <p>Issues</p>
              <p>Project</p>
              <p>Twitter</p>
            </div>
            <div className="footer-mini-boxes">
              <h3>Help</h3>
              <p>Support</p>
              <p>Troubleshooting</p>
              <p>Chat</p>
              <p>Contact Us</p>
            </div>
            <div className="footer-mini-boxes">
              <h3>Other</h3>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>License</p>
              <p>Terms and conditions apply</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
