import React from 'react';

import {Redirect} from 'react-router-dom';

const Step = ({step}) => {

  return (
    <div key={step.id}>STEP: {step.statement}  DIRECTION: {step.direction} </div>
  )

}

export default Step
