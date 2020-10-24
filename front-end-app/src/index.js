import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/main.scss'
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import {  rootReducer } from './reducers/index'
import { Provider } from 'react-redux'
import './App.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

