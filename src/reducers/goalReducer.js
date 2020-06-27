
export default function goalReducer(state = {goals: []}, action) {

  return action.payload;
  //this is just to see that the action is coming in correctly, and that the store can be properly updated by the reducer.

}
