export const deleteGoal = (id) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(jsonizedGoal => dispatch({type: 'DELETE_GOAL', payload: jsonizedGoal}))
  }

}
