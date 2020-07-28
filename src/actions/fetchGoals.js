// This function creates an action object, which is then dispatched to the reducer, which then returns the new version of state based on the dispatched action.

export function fetchGoals() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(jsonizedGoals => dispatch(
      {//this is the ACTION object that is getting dispatch()ed.
        type: 'FETCH_GOALS',// DISPATCH requires that the object it dispatch()es have a key of "type".
        payload: jsonizedGoals
      }
    ))
  }

}
