import React from 'react';
import {connect} from 'react-redux';
import {deleteStep} from '../actions/deleteStep';
import Step from './Step'

const Steps = (props) => {

  //The first time that props come through (especially when the page gets refreshed), they very well may be undefined, hence the need for "props.steps && props.steps.map" instead of just "props.steps.map".
  //Because this is a functional (rather than class) component, "const" is needed:
  const handleDelete = (step) => {
    console.log('Right here', step.id, step.goal_id)
    props.deleteStep(step.id, step.goal_id)
  }

  return (
    <div>
      {
        props.steps && props.steps.map(step => <Step key={step.id} step={step} deleteStep={() => handleDelete(step)} />)
      }
    </div>
  )
}

export default connect(null, {deleteStep})(Steps)
