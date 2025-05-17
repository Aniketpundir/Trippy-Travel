import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navShow, setNavShow] = useState(true);
  return (
    <>
      <nav>
        <div className="navbar">
          <Link className="logo" to="/">
            <h4>Trippy</h4>
          </Link>

          <div className="ham-icons">
            <i
              onClick={() => {
                setNavShow(!navShow);
              }}
              className="fas fa-bars"
            ></i>
          </div>

          <div className={navShow ? "nav-menu" : "nav-menu2"}>
            <Link className="menu-list" to="/">
              <p>
                <i className="fa-solid fa-house-user"></i>Home
              </p>
            </Link>
            <Link className="menu-list" to="/About">
              <p>
                <i className="fa-solid fa-circle-info"></i>About
              </p>
            </Link>
            <Link className="menu-list" to="/Service">
              <p>
                <i className="fa-solid fa-briefcase"></i>Service
              </p>
            </Link>
            <Link className="menu-list" to="/Contact">
              <p>
                <i className="fa-solid fa-address-book"></i>Contact
              </p>
            </Link>
            <Link to="/">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
