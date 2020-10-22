import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import SearchForm from '../components/SearchForm'

import Nav from "./Nav";

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
      <SearchForm />
      <div className="profile-body">
        <h1>{user}'s Profile Page</h1>
        <div className="profile-info">
          <i class="fas fa-id-card"></i>
        </div>

        <div className="profile-favorite-songs">
          <h1> Username: {user} </h1>
          <h3> Favorite Tracks:</h3>
          <ul>
            {/* {favs.map(fav => {
              return (
                <li>
                  {" "}
                  {fav.track_name} by {fav.artist_name} 
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <p>Suggestify Est 2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;