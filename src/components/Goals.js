import React from 'react';
import {Route, Link} from 'react-router-dom';
import {deleteGoal} from '../actions/deleteGoal';
import Goal from './Goal';
import {connect} from 'react-redux';

//This component can just be functional rather than a class, since it's just going to present a list of Goals. (A functional component is basically just a function.)
//Props are being provided to Goals from parent GoalsContainer. With a class component, if props are being passed, one can access a prop through "this.props.goals".  With a functional component: one needs to provide an ARGUMENT, in this case, "props"; (alternatively, deconstruction, e.g., "{goals}", can be used to pass in an individual prop; and if there were another prop, say, "X", it could be "{goals, X}").
class Goals extends React.Component {
//const Goals = (props) => {
  constructor(props) {
    super(props);
// console.log('Line 13', this.props)
//     let goalIdKeysAndVotesValues = {}
// console.log('Line 15', goalIdKeysAndVotesValues, this.props.goals)
//     this.props.goals.map(goal => goalIdKeysAndVotesValues[5] = 0);
// console.log('Line 17', goalIdKeysAndVotesValues)
//     this.state = goalIdKeysAndVotesValues //Sole key should be goal.id, and the sole value should be votes.
// console.log('Line 19', this.state)
    console.log('This is this.props.goals: ', this.props.goals)
    this.state = {goals: this.props.goals }
    this.state.goalsToVotes = []
    this.state.goals.map(goal => this.state.goalsToVotes[goal.id] = 0);
    console.log('This is state: ', this.state)

  }
// `goalId_${goal.id}`
  render() {



  //props.goals.map(goal => goal.setAttribute('votes', 0));
  //console.log(props.goals[0].votes);

  // const deleteGoal = (goal) => {
  //   //debugger;
  //   console.log('Right here', goal.id)
  //   props.deleteGoal(goal.id)
  // }


//The use of LINK below means that every time someone navigates to the Goal component, it's through the Route, and the Goal component is never being rendered anywhere else, which means that it will always have the routerProps that are being sent in from GoalsContainer.

    return (
      <div>
        <h1>These Are All Of Your Current Goals:</h1>


        {this.props.goals.map(goal =>

          <li key={goal.id}>
            <Link to={`/goals/${goal.id}`}>{goal.mission}</Link>
            <div>
              <button>Vote</button>
            </div>
            <button onClick={() => deleteGoal(goal)}>Delete Goal</button>
            <br></br>
            <br></br>
          </li>

        )}


        <br></br>

      </div>
    )
    // <Link to={'/goals/new'}>New Goal</Link>


  }

  deleteGoal = (goal) => {
    //debugger;
    console.log('Right here', goal.id)
    this.props.deleteGoal(goal.id)
  }
}


//export default Goals
export default connect(null, {deleteGoal})(Goals)
// {props.goals.map(goal => <li key={goal.id}>{goal.mission} | {goal.deadline} | {goal.outcome}</li>)}
