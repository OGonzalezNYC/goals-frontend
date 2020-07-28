import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import StepsContainer from '../containers/StepsContainer';
import GoalEdit from './GoalEdit'
import {deleteGoal} from '../actions/deleteGoal';

const Goal = (props) => {

  let goal = props.goals.filter(goal => goal.id == props.match.params.id)[0] //Double "=" instead of triple "=" because one is a string and the other's an integer.

  const deleteGoal = (goal) => {
    if (goal) {
      props.deleteGoal(goal.id)
    } else {
      alert("This goal has already been deleted.")
    }
  }

  //the first time that the props are coming through, this component does not yet have the GOALS. But it then automatically re-renders, this time in possession of the GOALS; hence, the need for the ternaries.
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

}

export default connect(null, {deleteGoal})(Goal)
