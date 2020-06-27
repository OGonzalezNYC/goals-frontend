import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {connect} from 'react-redux';
//this gives the App component the ability to access the store; and App implements that ability below, at the very last line of code in this file

import {fetchGoals} from './actions/fetchGoals';
// this makes the fetchGoals() function in the fetchGoals file a prop of App.  (And the brackets around "fetchGoals" are necessary since that file is not EXPORT defaulted).

class App extends React.Component {

  componentDidMount() {
console.log("HERE")
    this.props.fetchGoals({type: 'FETCH_GOALS', payload: {mission: "Win!"}})
    //this is the action object that fetchGoals dispatches below to the reducer. In this case, the payload is just dummy data.

    // // fetch('http://localhost:3000/api/v1/goals/1/steps', {
    // // })
    // fetch('http://localhost:3000/api/v1/goals', {
    //   method: 'GET'
    // })
    // //no need to specify "method: 'GET'", as GET is the default method for a fetch() request.
    // //console.log("HERE") CHECK
    // .then(response => response.json())
    // //console.log("HERE") CHECK
    // .then(jsonizedResponse => console.log(jsonizedResponse))
    // //console.log("HERE") CHECK
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     goals: state.goals
//   }
// }

export default connect(null, {fetchGoals})(App);
//null because we don't currently care about OBTAINING state; and {fetchGoals} is the equivalent of mapDispatchToProps, which sends the action object to the producer




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
