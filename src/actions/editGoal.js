export const editGoal = (data) => { // "data" will becoming from GoalInput STATE.
//debugger;
//GoalInput will need to be connected to the Redux store because it is going to be calling the addAccount function, which will be dispatching something to the reducer.

//dispatch is passed into this returned function so that it can fetch through thunk.
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    //.then(jsonizedResponse => console.log(jsonizedResponse))//CHECK
    .then(jsonizedGoal => dispatch({type: 'EDIT_GOAL', payload: jsonizedGoal}))
  }

}
