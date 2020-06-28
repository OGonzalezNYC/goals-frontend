import React from 'react';

//This component can just be functional rather than a class, since it's just going to present a list of Goals.
//With a class component, if props are being passed, one can access a prop through this.props.  With a functional component, one needs to provide an argument, in this case, "props":
 const Goals = (props) => {
//no render is needed inside a functional component.
  return (
    <div>
      {props.goals.map(goal => <li key={goal.id}>{goal.mission} | {goal.deadline} | {goal.outcome}</li>)}
    </div>
  )
 }

 export default Goals
