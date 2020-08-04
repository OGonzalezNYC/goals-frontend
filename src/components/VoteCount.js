import React from 'react';

class VoteCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {votes: 0}
  }

  vote = () => {
    this.setState((s) => {
      return {votes: s.votes + 1}
    });
  }

  render() {
    return (
      <div>
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
export default VoteCount
