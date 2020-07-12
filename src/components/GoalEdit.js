import React from 'react';
import {connect} from 'react-redux';
import {editGoal} from '../actions/editGoal'

//This component is a form, so it needs to have state, so it needs to be a class.
class GoalEdit extends React.Component {
  //constructor() can be used, but isn't necessary.
  //You technically aren't supposed to use null for an empty value.
  // state = {mission: '', deadline: Date.now(), outcome: "Get after it!"}
  state = {
    mission: '',
    outcome: ''
  }

  handleChange = (event) => {
//debugger;
    this.setState({
      [event.target.name]: event.target.value //the "[]" are used because the value within the [] is first being read, and then being set as the key.
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //the form data needs to get sent to the backend. The first requirement for that is an ACTION. So there needs to be an ACTION CREATOR here.

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

          <label>Update Status of Goal:</label>
          <input type="text" value={this.state.outcome} onChange={this.handleChange} name="outcome"/>
          <input type="submit"/>
        </form><br></br>
      </div>
    )
  }
}

export default connect(null, {editGoal})(GoalEdit)
