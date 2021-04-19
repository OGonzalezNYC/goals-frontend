//makes sense for this to be a functional component rather than a class component, since its purpose is merely to display, and therefore there's no need for state.

import React from 'react';
//this component needs access to an account, so it needs props, which, in this case, could just as easily be {goal}

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import StepsContainer from '../containers/StepsContainer';

import GoalEdit from './GoalEdit'

import {deleteGoal} from '../actions/deleteGoal';

const Goal = (props) => {
  console.log('INSIDE', props)
  console.log(props)//Why does this component automatically render twice?

  //let goal = props.goals[props.match.params.id - 1]//should I change this, just in case the id isn't always exactly 1 greater than the array index? (OR in order to get around the issue of whether the goal's id number is exactly 1 greater than its index number, I could perhaps access the goal by its mission attribute).
  //console.log(goal)

  let goal = props.goals.filter(goal => goal.id == props.match.params.id)[0] //Double "=" instead of triple "=" because one is a string and the other's an integer.  Instead of using filter() (which returns an array) and then needing to use "[0]", would simply using find() be a bit more efficient?

  const deleteGoal = (goal) => {
    //debugger;
    //console.log('Right here', goal.id)
    if (goal) {
    props.deleteGoal(goal.id)
  } else {
    alert("This goal has already been deleted.")
  }
  }


  //the first time that the props are coming through, this component does not yet have the GOALS. But it then automatically re-renders, this time in possession of the GOALS; hence, the need for the above ternary. But WHY does this component automatically render twice?
  return (
    <div>
      <h1>
        GOAL:
      </h1>
      <h2>
        {goal ? goal.mission : null}
      </h2>
      <h1>
        {goal ? 'STATUS:' : null}
      </h1>
      <h2>
        {goal ? goal.outcome : null}
      </h2>

      <GoalEdit goal={goal}/>
      <h2>These Are The Steps You Have Taken Towards Or Away From Your Goal:</h2>
      <StepsContainer goal={goal}/>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => deleteGoal(goal)}>Delete Goal</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
  // <br></br>
  // <Link to={'/goals'}>Goals</Link>
  // <br></br>
  // <br></br>
  // <Link to={'/goals/new'}>New Goal</Link>

}



//export default Goal
export default connect(null, {deleteGoal})(Goal)



// <button onClick={() => deleteGoal(goal)}>Delete Goal</button>
//
//   const deleteGoal = (goal) => {
//     //debugger;
//     console.log('Right here', goal.id)
//     props.deleteGoal(goal.id)
//   }
