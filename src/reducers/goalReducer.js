
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
      let goals = state.goals.map(goal => {
        if (goal.id === action.payload.id) {
          return action.payload
        } else {
          return goal
        }
      })
      return {
        ...state, goals: goals
      }
    default:
      return state
  }
}
