import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import { getData } from '../actions/getAction'
import { connect } from 'react-redux'
import Nav from "./Nav";

const MyProfile = props => {

  const { id } = useParams()

  const showProfile = () => {
    props.getData(id)
  }

  useEffect(() => showProfile(), []) 


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

const mapStateToProps = state => {

  return {
    profile: state.data
  }

}

export default connect(mapStateToProps, {getData})(MyProfile);