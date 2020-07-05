import React from 'react';
import StepInput from '../components/StepInput';
import Steps from '../components/Steps';
//Typically makes sense for containers to be CLASS components rather than FUNCTIONAL, as many, if not most, containers need STATE, and may need stuff like COMPONENTDIDMOUNT.
class StepsContainer extends React.Component {

//Below, the conditional(?, which uses "&&" instead of a ternary operator) was necessary because when the page gets refreshed, the Redx store gets cleared out, and initially comes in undefined.)
  render() {
    return (
      <div>
        <StepInput/>
        <Steps steps={this.props.goal && this.props.goal.steps}/>
      </div>
    )
  }

}

export default StepsContainer
