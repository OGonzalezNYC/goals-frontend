import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchGoals} from '../actions/fetchGoals';
import Goals from '../components/Goals';
import Goal from '../components/Goal';
import GoalInput from '../components/GoalInput';

class GoalsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchGoals()
  }

  //In order for the Goals component to have access to the goals that mapStateToProps below is obtaining from state, the Goals component is endowed with a prop of "goals".
  render() {
    return (
      <div>
        <Switch>
          <Route path='/goals/new' component={GoalInput}/>
          <Route path='/goals/:id' render={(routerProps) => <Goal {...routerProps} goals={this.props.goals} />} />
          <Route exact path='/goals' render={(routerProps) => <Goals {...routerProps}  goals={this.props.goals} />} />
        </Switch>
      </div>
    )
  }
  //routerProps includes a key called 'match', within which is a key called 'params', within which will be a key caled 'id' because of how I've included 'id' in the path.
  //When navigating to a route, Switch will choose the first path that matches that route. And the GoalInput line must be placed above the Goal line because ":id" is just a stand-in for anything, which means that '/goals/new' is a match for '/goals/:id'. So if the GoalInput line of code isn't placed above the Goal line, the GoalInput form will be inaccessible.

}

const mapStateToProps = state => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
