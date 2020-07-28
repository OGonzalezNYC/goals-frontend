import React from 'react';
import {Route, Link} from 'react-router-dom';
import {deleteGoal} from '../actions/deleteGoal';
import Goal from './Goal';
import {connect} from 'react-redux';
import VoteCount from './VoteCount';

const Goals = (props) => {

  const deleteGoal = (goal) => {
    props.deleteGoal(goal.id)
  }

  return (
    <div>
      <h1>These Are All Of Your Current Goals:</h1>
      {props.goals.map(goal =>
        <li key={goal.id}>
          <Link to={`/goals/${goal.id}`}>{goal.mission}</Link>
          <div>
            <VoteCount initialValue={0} id={goal.id}/>
          </div>
          <button onClick={() => deleteGoal(goal)}>Delete Goal</button>
          <br></br>
          <br></br>
        </li>
      )}
      <br></br>
    </div>
  )

}

export default connect(null, {deleteGoal})(Goals)
