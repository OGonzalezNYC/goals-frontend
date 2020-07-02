import React from 'react';
import Goal from './Goal'

//This component can just be functional rather than a class, since it's just going to present a list of Goals. (A functional component is basically just a function.)
//Props are being provided to Goals from parent GoalsContainer. With a class component, if props are being passed, one can access a prop through "this.props.goals".  With a functional component: one needs to provide an ARGUMENT, in this case, "props"; (alternatively, deconstruction, e.g., "{goals}", can be used to pass in an individual prop; and if there were another prop, say, "X", it could be "{goals, X}").
 const Goals = (props) => {
//no render is needed inside a functional component.
  return (
    <div>
      {props.goals.map(goal => <div key={goal.id}><Goal goal={goal}/></div>)}
    </div>
  )
 }

 export default Goals
// {props.goals.map(goal => <li key={goal.id}>{goal.mission} | {goal.deadline} | {goal.outcome}</li>)}
