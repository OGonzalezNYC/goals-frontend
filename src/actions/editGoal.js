export const editGoal = (data) => { // "data" will becoming from GoalInput STATE.

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
