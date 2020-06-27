import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import {createStore, applyMiddleware, compose} from 'redux'; //createStore to enable setting up of the store, applyMiddleware to incorporate thunk with the store, and compose to be able to combine several different DEVTOOLS into one, as createStore below can only take one second argument.
import thunk from 'redux-thunk'; //for asynchronous requests.
import { Provider } from 'react-redux'; // so any component wrapped in Provider will have access to the (redux) store


import App from './App';
//import * as serviceWorker from './serviceWorker';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store is where I store my data globally. reducer receives actions that I send it; and, based on that action, the reducer returns a new version of the store.

//set up the store:
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

//Wrapping the App in Provider, below enables the App and any child component of the App to have access to the store, which will need to be passed into the Provider as store. (BTW, it could just as easily be "let myStore" and store={myStore}).
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
