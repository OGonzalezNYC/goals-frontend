import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {connect} from 'react-redux';
//this gives the App component the ability to access the store.

import GoalsContainer from './containers/GoalsContainer';

class App extends React.Component {
//App component CAN be a container component.
  //componentDidMount() {




    render() {
      return (
        <div className="App">
          <GoalsContainer/>
        </div>
      )
    }
//  }
}



export default App;





// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
//
