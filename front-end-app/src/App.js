import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewUser from './components/NewUser';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

const App = () => {

  
  return (

    <div className="App">
      <h1>Spotify Song Suggestor front-end-App</h1>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/new_user' component={NewUser} />
        <PrivateRoute exact path='/user_profile' />
        <PrivateRoute exact path='/song_suggester' />
      </Switch>
    </div>

  );
}

export default App;
