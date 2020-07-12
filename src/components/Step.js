import React from 'react';

import {Redirect} from 'react-router-dom';

const Step = (props) => {

  return (
    <div>
      <li key={props.step.id}>{props.step.statement}: {props.step.direction}</li>
      <button onClick={props.deleteStep}>Delete Step</button>
    </div>

  )

}

export default Step
