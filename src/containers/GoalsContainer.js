//A container is typically a class component, and should render other components, pass them data if they require data, and can also have functions to pass to its child components.
import React from 'react';
import {connect} from 'react-redux'; //Because this app employs redux, if I want to fetch the goals from the backend, add them to the redux store, and use those goals in the Goals component (which is a child of this component), I need to connect this component to the store. This enables me to do that, which I implement in the bottom line of code in this file.

import {fetchGoals} from '../actions/fetchGoals';
import Goals from '../components/Goals'; //I think the reason for the ".." is because the imports are coming from a different sub-folder.
import GoalInput from '../components/GoalInput';


class GoalsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchGoals()
  }

  //the one thing a class component must have is a render
  render() {
    //a render must have a return(?).
    return (
      <div>
        <GoalInput/>
        <Goals goals={this.props.goals}/>
      </div>
    )
  }

}

//this enables the reading of state:
const mapStateToProps = state => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer) //I export this so that App, its parent component, can import it. And I employ "connect" in order to...  Providing {fetchGoals} as the second argument is the equivalent of providing mapDispatchToProps. Typicallly, the more complicated an app gets, it's easier to have these actions separated out into the actions folder, and then just import them rather than mapping dispatchToProps.
