import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import {createStore, applyMiddleware} from 'redux'; //to enable setting up of the store, and to incorporate thunk with the store.
import thunk from 'redux-thunk'; //for asynchronous requests.
import { Provider } from 'react-redux'; // so any component wrapped in Provider will have access to the (redux) store


import App from './App';
//import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
