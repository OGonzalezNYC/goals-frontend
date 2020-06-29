
// This function creates an action object, which is then dispatched to the reducer, which then returns the new version of state based on the dispatched action.

//Typically, an action creator, such as this function, without incorporating a fetch request or any other sort of asynchronous request, would return just a regular JS (action) object with a type and usually a payload, e.g. {type: 'ADD', payload: 'XYZ'}. And then the connect function would automatically dispatch the action to the reducer. But since a fetch request takes some time, the action can't be returned right away, so I DON'T want the connect function to automatically call dispatch(). Instead, I use dispatch() inside the action creator (FETCHGOALS) so I can call dispatch() immediately after the action object is returned. And THUNK allows the use of dispatch() within an action creator. Without THUNK, dispatch() can't be used inside of an action creator.  So I include dispatch as an argument in the anonymous function that my action creator (fetchGoals()) initially returns:

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
      {//this is the ACTION object that is getting dispatch()ed.
      type: 'FETCH_GOALS',// DISPATCH requires that the object it dispatch()es have a key of "type".
      payload: jsonizedResponse
      }
    ))
  }
}
