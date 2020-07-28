export const deleteStep = (id, goalId) => {
  
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${goalId}/steps/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(jsonizedGoal => dispatch({type: 'DELETE_STEP', payload: jsonizedGoal}))
  }

}
