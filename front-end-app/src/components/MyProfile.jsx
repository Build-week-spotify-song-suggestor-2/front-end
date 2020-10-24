import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import { getData } from '../actions/getAction'
import { useDispatch } from 'react-redux'
import Nav from "./Nav";
import Songs from '../components/Songs'

const Profile = props => {

  const { id } = useParams()

  
  const dispatch = useDispatch()

  const showProfile = () => {
    dispatch(getData(id))
  }

  useEffect(() => showProfile(), []) 


  return (

    <div className="profile-container">
      <Nav />

    <h2 className='welcome'>{`Welcome ${id}!`}</h2>

      <SearchForm />
      <Songs />
      
      <footer>
        <div className="footer-content">
          <p>Suggestify Est 2020</p>
        </div>
      </footer>
    </div>
  );
};



export default Profile;


