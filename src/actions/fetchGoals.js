
// This function creates an action object, which is then dispatched to the reducer, which then returns the new version of state based on the dispatched action
//export default function fetchGoals() {
export function fetchGoals() {
  console.log('inside fetchGoals')
  //thunk allows the use of dispatch() within an action creator, such as this function.
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'GET'
    })
    //no actual need to specify "method: 'GET'", as GET is the default method for a fetch() request.
    .then(response => response.json())
    .then(jsonizedResponse => dispatch(
      {
      type: 'FETCH_GOALS',
      payload: jsonizedResponse
      }
    ))
  }
}
