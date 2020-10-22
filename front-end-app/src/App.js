import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import NewUser from './components/NewUser';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import MyProfile from './components/MyProfile'

const App = () => {

  
  return (

    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/new_user' component={NewUser} />
        <Route exact path='/songs' />
        <Route exact path='/profile' component={MyProfile} /> 
      </Switch>
    </div>

  );
}

export default App;
