import React from 'react';
import {Route, Link} from 'react-router-dom';
import Goal from './Goal';

//This component can just be functional rather than a class, since it's just going to present a list of Goals. (A functional component is basically just a function.)
//Props are being provided to Goals from parent GoalsContainer. With a class component, if props are being passed, one can access a prop through "this.props.goals".  With a functional component: one needs to provide an ARGUMENT, in this case, "props"; (alternatively, deconstruction, e.g., "{goals}", can be used to pass in an individual prop; and if there were another prop, say, "X", it could be "{goals, X}").
 const Goals = (props) => {
//no render is needed inside a functional component.

//The use of LINK below means that every time someone navigates to the Goal component, it's through the Route, and the Goal component is never being rendered anywhere else, which means that it will always have the routerProps that are being sent in from GoalsContainer.
  return (
    <div>
      {props.goals.map(goal =>
        <li key={goal.id}>
          <Link to={`/goals/${goal.id}`}>{goal.mission}</Link>
        </li>
      )}
    </div>
  )
 }

 export default Goals
// {props.goals.map(goal => <li key={goal.id}>{goal.mission} | {goal.deadline} | {goal.outcome}</li>)}
