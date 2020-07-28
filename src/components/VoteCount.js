import React from 'react';

class VoteCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {votes: 0}
  }

  vote = () => {
    // let x = this.state.votes
    // this.setState({votes: x + 1})
    this.setState((previousState, previousProps) => ({votes: previousState.votes += 1}))
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
