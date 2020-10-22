import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

import Nav from "./Nav";
import ArtistsSearch from "./Song Suggestions/ArtistsSearch"

const Profile = () => {


  const [favs, setFavs] = useState([]);

  const user = localStorage.getItem("username");

  
//   useEffect(() => {
//     axiosWithAuth()
//       .get("")
//       .then(response => {
//         console.log(response);
//         setFavs(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [setFavs]);
//   console.log("favorite songs", favs);

  return (
    <div className="profile-container">
      <Nav />
      <ArtistsSearch />
      
      <footer>
        <div className="footer-content">
          <p>Suggestify Est 2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;


