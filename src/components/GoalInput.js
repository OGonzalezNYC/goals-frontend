import React from 'react';
import {connect} from 'react-redux';
import {addGoal} from '../actions/addGoal'

//This component is a form, so it needs to have state, so it needs to be a class.
class GoalInput extends React.Component {
  //constructor() can be used, but isn't necessary.
  //You technically aren't supposed to use null for an empty value.
  // state = {mission: '', deadline: Date.now(), outcome: "Get after it!"}
  state = {mission: '', outcome: "Get after it!"}

  handleChange = (event) => {
//debugger;
    this.setState({
      [event.target.name]: event.target.value //the "[]" are used because the value within the [] is first being read, and then being set as the key.
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //the form data needs to get sent to the backend. The first requirement for that is an ACTION. So there needs to be an ACTION CREATOR here.
    this.props.addGoal(this.state)

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
        </form><br></br>
      </div>
    )
  }
}

export default connect(null, {addGoal})(GoalInput)
// render() {
//   return (
//     <div>
//       <form onSubmit={this.handleSubmit}>
//         <label>Goal:</label><br></br>
//         <input type="text" placeholder="mission" value={this.state.mission} onChange={this.handleChange} name="mission"/><br></br><br></br>
//         <label>On or before:</label><br></br>
//         <input type="text" placeholder="deadline" value={this.state.deadline} onChange={this.handleChange} name="deadline"/><br></br><br></br>
//         <label>Status:</label><br></br>
//         <input type="text" placeholder="outcome" value={this.state.outcome} onChange={this.handleChange} name="outcome"/><br></br><br></br>
//         <input type="submit"/>
//       </form><br></br>
//     </div>
//   )
// }
