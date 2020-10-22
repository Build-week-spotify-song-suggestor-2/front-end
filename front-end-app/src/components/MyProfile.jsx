import React, { useState, useEffect } from "react";
import { getDataWithAuth } from '../actions/getAction'
import { useParams } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

import Nav from "./Nav";

const Profile = () => {


  const [favs, setFavs] = useState([]);

  const { id } = useParams()

  return (
    <div className="profile-container">
      <Nav />
      <h3>{`Welcome ${id}`}!</h3>
      <SearchForm />
      <div className="profile-body">
        
        <div className="profile-info">
          <i class="fas fa-id-card"></i>
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

export default Profile;