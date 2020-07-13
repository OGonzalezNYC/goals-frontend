import React from 'react';

//import {Redirect} from 'react-router-dom'; //As I suspected, this line is unnecessary.

const Step = ({step, deleteStep}) => {

  return (
    <li key={step.id}>STEP: {step.statement}  DIRECTION: {step.direction} <button onClick={deleteStep}>Delete</button><br></br><br></br></li>
  )

}


// <div key={step.id}>STEP: {step.statement}  DIRECTION: {step.direction} </div>

export default Step
