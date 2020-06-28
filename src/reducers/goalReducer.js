
export default function goalReducer(state = {goals: []}, action) { //export so index.js can access it. (App is a child of index.js).
  switch (action.type) {
    case 'FETCH_GOALS':
      return {
        goals: action.payload
      }
    default:
      return state
  }
}
