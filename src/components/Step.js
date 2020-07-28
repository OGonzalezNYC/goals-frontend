import React from 'react';

const Step = ({step, deleteStep}) => {

  return (
    <li key={step.id}>STEP: {step.statement}  DIRECTION: {step.direction} <button onClick={deleteStep}>Delete</button><br></br><br></br></li>
  )

}

export default Step
