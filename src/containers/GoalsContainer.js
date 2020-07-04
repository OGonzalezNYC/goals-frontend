//A container is typically a class component, and should render other components, pass them data if they require data, and can also have functions to pass to its child components.
import React from 'react';
import {connect} from 'react-redux'; //Because this app employs redux, if I want to fetch the goals from the backend, add them to the redux store, and use those goals in the Goals component (which is a child of this component), I need to connect this component to the store. This enables me to do that, which I implement in the bottom line of code in this file.

import {Route} from 'react-router-dom';

import {fetchGoals} from '../actions/fetchGoals'; //"{}" because, unlike goalReducer, fetchGoals PLAIN-exports itself rather than DEFAULT-exporting itself. (This makes fetchGoals() a prop of GoalsContainer.  But in order to CONNECT with the STORE, it must be, well, CONNECTED tot the store (at the very last line of code in this file)).

import Goals from '../components/Goals'; //I think the reason for the ".." is because the imports are coming from a different sub-folder.

import Goal from '../components/Goal';
import GoalInput from '../components/GoalInput';


class GoalsContainer extends React.Component {

  componentDidMount() {
    //fetchGoals() would not work right because it wouldn't be properly connected to the Redux STORE. So I want to access it THROUGH props:
    this.props.fetchGoals()
    //AND it must be set up in such access, which is achieved by CONNECTING it to the STORE, which is achieved through the use of CONNECT (at the very last line of code in this file).
  }

  //the one thing a class component must have is a render
  //a render() must have a return.
  //In order for the Goals component to have access to the goals that mapStateToProps below is obtaining from state, the Goals component is endowed with a prop of "goals".
  render() {
    return (
      <div>
        <Route path='/goals/new' component={GoalInput}/>
        <Route path='/goals/:id' render={(routerProps) => <Goal {...routerProps} goals={this.props.goals} />} />
        <Route exact path='/goals' render={(routerProps) => <Goals {...routerProps} goals={this.props.goals} />} />
      </div>
    )
  }//The only reason why you wouldn't want "exact path" is for nesting purposes.
  //The above three Routes do not render the components directly; they are CONDITIONALLY redered based on the url, which is why none of these components are visible without goin to the corresponding Route.
  //routerProps includes a key called 'match', within which is a key called 'params', within which will be key caled 'id' because of how I've included 'id' in the path.

}

//this (with its implementation below via CONNECT) enables the reading of state:
const mapStateToProps = state => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer) //I export this so that App, its parent component, can import it. And I employ CONNECT in order to connect both CONNECT arguments to the store. Providing {fetchGoals} as the second argument is the equivalent of providing mapDispatchToProps. Typicallly, the more complicated an app gets, it's easier to have these actions separated out into the actions folder, and then just import them rather than mapping dispatchToProps.
