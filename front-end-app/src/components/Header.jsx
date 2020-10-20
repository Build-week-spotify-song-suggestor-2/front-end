import React, { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";
import Form from "./Form";

import '../SCSS/Header.scss';

const logo = require("../img/suggestify-logo.png");

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => setMenuStatus(!menuStatus);

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="image-container">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <h1 className="title">Suggestify</h1>
        <div className="header-links-container">
          <div className="header-links">
            {isLoggedIn ? (
              <React.Fragment>
                <i onClick={toggleMenu} class="fas fa-user-circle"></i>
                {menuStatus && (
                  <div style={{ position: "absolute" }}>
                    <div className="links-wrapper">
                      <NavLink to="/favorites">Favorites</NavLink>
                      <NavLink to="/myprofile">Profile</NavLink>
                      <NavLink
                        to="/"
                        onClick={() => localStorage.removeItem("token")}
                      >
                        Logout
                      </NavLink>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="/NewUser">Sign Up</NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="header-title"></div>
    </div>
  );
};
export default Header;