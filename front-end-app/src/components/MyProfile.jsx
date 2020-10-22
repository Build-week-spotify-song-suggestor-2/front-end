import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import { getData } from '../actions/getAction'
import { connect } from 'react-redux'
import Nav from "./Nav";
import ArtistsSearch from "./Song Suggestions/ArtistsSearch"

const Profile = props => {

  const { id } = useParams()

  const showProfile = () => {
    props.getData(id)
  }

  useEffect(() => showProfile(), []) 


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


