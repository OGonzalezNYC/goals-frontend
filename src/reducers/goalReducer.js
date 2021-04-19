
export default function goalReducer(state = {goals: []}, action) { //export so index.js can access it. (App is a child of index.js).
//debugger;
  switch (action.type) {
    case 'FETCH_GOALS':
      return {
        goals: action.payload
      }
    case 'ADD_GOAL':
      return {
        ...state, goals: [...state.goals, action.payload]
      }
    case 'ADD_STEP':

      let goalsAfterAdditionOfStep = state.goals.map(goal => {//Since this portion is identical for "ADD_STEP, DELETE_STEP AND EDIT_GOAL, consider (except for the variables, which could be one instead of three if all three cases were only case), consider grouping all three cases into one case."
        if (goal.id === action.payload.id) {
          return action.payload
        } else {
          return goal
        }
      })
      return {
        ...state, goals: goalsAfterAdditionOfStep
      }

    case 'DELETE_STEP':
//debugger;
      let goalsAfterDeletionOfStep = state.goals.map(goal => {
        if (goal.id === action.payload.id) {
          return action.payload
        } else {
          return goal
        }
      })
      return {
        ...state, goals: goalsAfterDeletionOfStep
      }
    case 'EDIT_GOAL':
console.log('inside EDIT_GOAL')
      let goalsAfterEditingOfGoal = state.goals.map(goal => {
        if (goal.id === action.payload.id) {
//console.log(action.payload)
          return action.payload
        } else {
          return goal
        }
      })
      return {
        ...state, goals: goalsAfterEditingOfGoal
      }
    case 'DELETE_GOAL':
      // const goals = state.goals.filter(goal => goal.id !== goal.id);
      //    return { ...state, goals}
console.log("Line 54", state)
      let goalsAfterDeletionOfGoal = state.goals.filter(goal => goal.id !== action.payload.id);
      // console.log("Line 56", {
      //   ...state, goals: goalsAfterDeletionOfGoal
      // })
      return {
        ...state, goals: goalsAfterDeletionOfGoal
      }


      // const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      //      return { ...state, restaurants}




    default:
      return state
  }
}
