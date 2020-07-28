export default function goalReducer(state = {goals: []}, action) {

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
      let goalsAfterAdditionOfStep = state.goals.map(goal => {
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
      let goalsAfterEditingOfGoal = state.goals.map(goal => {
        if (goal.id === action.payload.id) {
          return action.payload
        } else {
          return goal
        }
      })
      return {
        ...state, goals: goalsAfterEditingOfGoal
      }


    case 'DELETE_GOAL':
      let goalsAfterDeletionOfGoal = state.goals.filter(goal => goal.id !== action.payload.id);
      return {
        ...state, goals: goalsAfterDeletionOfGoal
      }
    default:
      return state

  }

}
