import React from 'react';
import {connect} from 'react-redux';
import {addStep} from '../actions/addStep'

class StepInput extends React.Component {
  //constructor() can be used, but isn't necessary.
  //You technically aren't supposed to use null for an empty value.
  // state = {mission: '', deadline: Date.now(), outcome: "Get after it!"}

  // state = {
  //   mission: '',
  //   outcome: "Get after it!"
  // }

//   handleChange = (event) => {
// //debugger;
//     this.setState({
//       [event.target.name]: event.target.value //the "[]" are used because the value within the [] is first being read, and then being set as the key.
//     })
//   }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   //the form data needs to get sent to the backend. The first requirement for that is an ACTION. So there needs to be an ACTION CREATOR here.
  //   this.props.addStep(this.state)
  //   this.setState({
  //     mission: '',
  //     outcome: "Get after it!"
  //   })
  // }

//For the sake of ease and simplicity, the keys of state should be identical to the backend attributes.
  state = {
    statement: "",
    direction: "backwards" //without a default value, one could inadvertently submit an empty string even if it doesn't look empty in the browser. I guess that's because ONCHANGE is triggered only by a, well, CHANGE. Perhaps I should change that by adding a PLACEHOLDER, and preventing a DISPATCH if the value is an empty string.
  }

//Later on, copy from GoalInput.
//To make this a controlled form, each input tag must have a name (identical to the corresponding state key) and a value; and the value needs to be stored in either the Redux store, or the component's state.

  handleChange = (event) => {

    //the simplest way is to abstract it out with "[event.target.name]", with "name" being a reference to the "name" attribute of the input tags in render(), down below.
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

      if (this.state.statement) {

      this.props.addStep(this.state, this.props.goal.id)//this.props.id is the GOAL id (or is it the goalId ?).
      this.setState({
        statement: "",
        direction: "backwards"
      })
    } else {
        alert("Describe the latest step that you took, and its direction.")
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add your latest step:</label>
          <input type="text" name="statement" value={this.state.statement} onChange={this.handleChange}/>
          <label>    And remember, If It Wasn't a Step Forward, It's a Step Backwards:</label>
          <select name="direction" value={this.state.direction} onChange={this.handleChange}>
              <option>forward</option>
              <option>backwards</option>
          </select>
          <input type="submit"/>
        </form>
        <br></br>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>Step:</label><br></br>
  //         <input type="text" placeholder="mission" value={this.state.mission} onChange={this.handleChange} name="mission"/><br></br><br></br>
  //         <label>Status:</label><br></br>
  //         <input type="text" placeholder="outcome" value={this.state.outcome} onChange={this.handleChange} name="outcome"/><br></br><br></br>
  //         <input type="submit"/>
  //       </form><br></br>
  //     </div>
  //   )
  // }
}

//export default connect(null, {addStep})(StepInput)
export default connect(null, {addStep})(StepInput)
//no need for mapStateToProps, since any props it needs are handed down to it from its parent component, StepsContainer; hence, "null".
