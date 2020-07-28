export const addStep = (step, goalId) => { // "data" will becoming from StepInput STATE.

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${goalId}/steps`, {
      headers: {
        'Content-Type': 'application/json'//,
        //'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(step)
    })
    .then(response => response.json())
    .then(jsonizedGoal => {
        if (jsonizedGoal.error) {
          alert("Be sure to describe both the step and its direction.")
        } else {
          dispatch({type: 'ADD_STEP', payload: jsonizedGoal})
        }
    })
  }

}
