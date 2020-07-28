import React from 'react';

//import {Redirect} from 'react-router-dom'; //As I suspected, this line is unnecessary.

class VoteCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {votes: 0}
  }

  vote = () => {
    this.setState({votes: this.state.votes += 1})
  }

  render() {
    return (
      <div key={this.props.id}>
        VOTES: {this.state.votes}
        <br></br>
        <button onClick={this.vote}>
          Vote
        </button>
        <br></br>
        <br></br>
      </div>
    )
  }
}


// <div key={step.id}>STEP: {step.statement}  DIRECTION: {step.direction} </div>

export default VoteCount
