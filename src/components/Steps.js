import React from 'react';
import {connect} from 'react-redux';
import {deleteStep} from '../actions/deleteStep';

import Step from './Step'

//def should be functional, as it needs to receive props.
const Steps = (props) => {
//debugger;
  //Later on, create a Step.js file, and render it here in the return rather than directly rendering each step's attributes.

  //The first time that props come through (especially when the page gets refreshed), they very well may be undefined, hence the need for "props.steps && props.steps.map" instead of just "props.steps.map".

  //Because this is a functional (rather than class) component, "const" is needed:
  const handleDelete = (step) => {
    console.log('Right here', step.id, step.goal_id)
    props.deleteStep(step.id, step.goal_id)
  }

  return (
    <div>
      {props.steps && props.steps.map(step => <li key={step.id}>

        <Step step={step} />
        

        <button onClick={() => handleDelete(step)}>Delete</button></li>)}
    </div>
  )

  //{props.steps && props.steps.map(step => <li key={step.id}>{step.statement} | {step.direction} <button onClick={() => handleDelete(step)}>Delete</button></li>)}



}

export default connect(null, {deleteStep})(Steps)
