import React from 'react';
import './App.css';
import NewUser from './components/NewUser';

const App = () => {
  return (
    <div className="App">
      <h1>Spotify Song Suggestor front-end-App</h1>
      <Login />
      <NewUser />
    </div>
  );
}

export default App;
