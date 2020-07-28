export const addGoal = (data) => { // "data" will becoming from GoalInput STATE.

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/goals', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(jsonizedGoal => dispatch({type: 'ADD_GOAL', payload: jsonizedGoal}))
  }

}
