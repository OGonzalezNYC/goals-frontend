import React from 'react';
import {connect} from 'react-redux';
import {editGoal} from '../actions/editGoal'

class GoalEdit extends React.Component {

  state = {
    mission: '',
    outcome: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let goal = {...this.state, id: this.props.goal.id}
    if (goal.outcome) {
      this.props.editGoal(goal)
      this.setState({
        mission: '',
        outcome: ''
      })
    } else {
        alert("Enter the new status of your goal.")
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Update The Status of Goal:</label>
          <input type="text" value={this.state.outcome} onChange={this.handleChange} name="outcome"/>
          <input type="submit"/>
        </form><br></br>
      </div>
    )
  }
}

export default connect(null, {editGoal})(GoalEdit)
