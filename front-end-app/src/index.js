import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/main.scss'
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

