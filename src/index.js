import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import "firebase/firestore";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import './scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import config from './config';
import rootReducers from './redux';
firebase.initializeApp(config.firebase);

const store = createStore(
  rootReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
