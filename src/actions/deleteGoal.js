export const deleteGoal = (id) => {
  console.log('INSIDE deleteGoal', id)
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${id}`, {
      method: 'DELETE'
    })
    //.then(console.log('HERE WE ARE.')) //CHECK
    .then(response => response.json())
    //.then(console.log('HERE WE ARE, ON LINE 9.')) //CHECK
    //.then(jsonizedGoal => console.log('HERE WE ARE, ON LINE 9.', jsonizedGoal))
    .then(jsonizedGoal => dispatch({type: 'DELETE_GOAL', payload: jsonizedGoal}))
  }

}
