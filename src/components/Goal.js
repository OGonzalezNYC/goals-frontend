//makes sense for this to be a functional component rather than a class component, since its purpose is merely to display, and therefore there's no need for state.

import React from 'react';
//this component needs access to an account, so it needs props, which, in this case, could just as easily be {goal}
const Goal = (props) => {

  return (
    <li>
      {props.goal.mission} | {props.goal.outcome}
    </li>
  )
}



export default Goal
