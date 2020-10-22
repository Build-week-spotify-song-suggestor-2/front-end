import React, { useState } from "react";
import "../../SCSS/ArtistsSearch.scss";


const ArtistsSearch = (props) => {

  const [query, setQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log(`searching for: ${query}`);
  };


  return (
    <div className="primary-list-container">
      <div className="search">
        <h2>Search for Your Favorite Artists</h2>
      </div>
      <div className="list-container">
          <form className="search-bar" onSubmit={search}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button type="submit">search</button>
          </form>
        <div className="list">
          <p>list here</p>
        </div>
      </div>
    </div>
)};


export default ArtistsSearch;
