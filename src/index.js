import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import {createStore, applyMiddleware, compose} from 'redux';
//createStore to enable setting up of the store, applyMiddleware to incorporate thunk with the store, and compose to be able to combine several different DEVTOOLS into one, as createStore below can only take one second argument.

import thunk from 'redux-thunk';
//for asynchronous requests.

import { Provider } from 'react-redux';
// Any component wrapped in Provider (or whose parent is wrapped in Provider) will have access to the (redux) store.

import {BrowserRouter as Router} from 'react-router-dom';//"as Router" allows me to refer to it as "Router"//Also, having included 'react-router-dom' in my package.json file also automatically brought in "react-router".

import goalReducer from './reducers/goalReducer';  //no "{}" necessary because, unlike fetchGoals, goalReducer DEFAULT-exports itself rather than PLAIN-exporting itself.


import App from './App';
//import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//set up the store:
let store = createStore(goalReducer, composeEnhancers(applyMiddleware(thunk)));
//store is where I store my data globally. The reducer receives actions that I send it; and, based on that action, the reducer returns a new version of the store.

//Wrapping the App in Provider, below enables the App and any descendant component of the App to have access to the store, which will need to be passed into the Provider as store. (BTW, it could just as easily be "let myStore" (above) and store={myStore}).
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
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
