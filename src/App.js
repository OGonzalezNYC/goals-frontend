import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {

  componentDidMount() {
    // fetch('http://localhost:3000/api/v1/goals/1/steps', {
    //   method: 'GET'
    // })
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'GET'
    })
    //no need to specify "method: 'GET'", as GET is the default method for a fetch() request.
    //console.log("HERE") CHECK
    .then(response => response.json())
    //console.log("HERE") CHECK
    .then(jsonizedResponse => console.log(jsonizedResponse))
    //console.log("HERE") CHECK
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
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
