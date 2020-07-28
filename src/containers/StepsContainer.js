import React from 'react';
import StepInput from '../components/StepInput';
import Steps from '../components/Steps';

class StepsContainer extends React.Component {

//The Redx store gets cleared out, and initially comes in undefined. Hence, the need for the conditional. "&&": if both are true, "steps" takes on the value of "this.props.goal.steps".
  render() {
    return (
      <div>
        <Steps steps={this.props.goal && this.props.goal.steps}/>
        <br></br>
        <StepInput goal={this.props.goal}/>
      </div>
    )
  }

}

export default StepsContainer
