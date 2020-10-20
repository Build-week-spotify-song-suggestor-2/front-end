import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/main.scss'
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducers/reducer'


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

