import React from 'react';
import {connect} from 'react-redux';
import {addGoal} from '../actions/addGoal'
import {Route, Link} from 'react-router-dom';

class GoalInput extends React.Component {

  state = {
    mission: '',
    outcome: "Get after it!"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.mission !== '') {
      this.props.addGoal(this.state)
      this.setState({
        mission: '',
        outcome: "Get after it!"
      })
    } else {
      alert("Describe your goal.")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Goal:</label><br></br>
          <input type="text" placeholder="mission" value={this.state.mission} onChange={this.handleChange} name="mission"/><br></br><br></br>
          <label>Status:</label><br></br>
          <input type="text" placeholder="outcome" value={this.state.outcome} onChange={this.handleChange} name="outcome"/><br></br><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}

export default connect(null, {addGoal})(GoalInput)
