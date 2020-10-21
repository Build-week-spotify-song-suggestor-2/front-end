import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

import "../SCSS/Home.scss";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Nav />
      <div className="home-full-bg">
        <div className="home-container">
          <div className="home-image">
            <div className="home-image-inner-container">
              <h3 className="subtitle">Find New Music...</h3>
              <div className="search-SearchForm">
                <SearchForm />
              </div>
            </div>
          </div>

          <div className="search-favorites-container">
            <div className="search-template">
              <i className="fas fa-search"></i> <span>Find Music</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="favorite-template">
              <i className="fas fa-heart"></i> <span>Save Your Favorites</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <p>Suggestify Est 2020</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
