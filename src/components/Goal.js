//makes sense for this to be a functional component rather than a class component, since its purpose is merely to display, and therefore there's no need for state.

import React from 'react';
//this component needs access to an account, so it needs props, which, in this case, could just as easily be {goal}
const Goal = (props) => {

  console.log(props)//Why does this component automatically render twice?

  let goal = props.goals[props.match.params.id - 1]//should I change this, just in case the id isn't always exactly 1 greater than the array index?
  console.log(goal)
  return (
    <li>
      {goal ? goal.mission : null} | {goal ? goal.outcome : null}
    </li>
  ) //the first time that the props are coming through, this component does not yet have the GOALS. But it then automatically re-renders, this time in possession of the GOALS; hence, the need for the above ternary. But WHY does this component automatically render twice?

}



export default Goal
