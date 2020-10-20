import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../SCSS/Header.scss';

const logo = require("../img/suggestify-logo.png");

const Nav = () => {


  const [menuStatus, setMenuStatus] = useState(false);
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
    
                <i onClick={toggleMenu} class="fas fa-user-circle"></i>
                {menuStatus && (
                  <div style={{ position: "absolute" }}>
                    <div className="links-wrapper">
                      <NavLink to="/favorites">Favorites</NavLink>
                      <NavLink to="/my_profile">Profile</NavLink>
                      <NavLink
                        to="/"
                        onClick={() => localStorage.removeItem("token")}
                      >
                        Logout
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="header-title"></div>
        </div>

      )
                
                
}


export default Nav