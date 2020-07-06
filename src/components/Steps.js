import React from 'react';

//def should be functional, as it needs to receive props.
const Steps = (props) => {
//debugger;
  //Later on, create a Step.js file, and render it here in the return rather than directly rendering each step's attributes.

  //The first time that props come through (especially when the page gets refreshed), they very well may be undefined, hence the need for "props.steps && props.steps.map" instead of just "props.steps.map".
  return (
    <div>
      {props.steps && props.steps.map(step => <li key={step.id}>{step.statement} | {step.direction}</li>)}
    </div>
  )
}

export default Steps
