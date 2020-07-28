import React from 'react';
import {connect} from 'react-redux';
import {addStep} from '../actions/addStep'

class StepInput extends React.Component {
  state = {
    statement: "",
    direction: "backwards"
  }

  handleChange = (event) => {

    //the simplest way is to abstract it out with "[event.target.name]", with "name" being a reference to the "name" attribute of the input tags in render(), down below.
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.statement) {

      this.props.addStep(this.state, this.props.goal.id)
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

}

export default connect(null, {addStep})(StepInput)
//no need for mapStateToProps, since any props it needs are handed down to it from its parent component, StepsContainer; hence, "null".
