export const addStep = (step, goalId) => { // "data" will becoming from StepInput STATE.
//debugger;
//StepInput will need to be connected to the Redux store because it is going to be calling the addStep function, which will be dispatching something to the reducer.

//dispatch is passed into this returned function so that it can fetch through thunk.
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

    // //.then(jsonizedResponse => console.log(jsonizedResponse))//CHECK
    // .then(jsonizedGoal => dispatch({type: 'ADD_STEP', payload: jsonizedGoal}))
    // //.then(jsonizedStep => dispatch({type: 'ADD_STEP', payload: jsonizedStep}))

    .then(jsonizedGoal => {
        if (jsonizedGoal.error) {
          alert("Be sure to describe both the step and its direction.")
        } else {
          dispatch({type: 'ADD_STEP', payload: jsonizedGoal})
        }
      //dispatch({type: 'ADD_STEP', payload: jsonizedGoal})
    })

  }

}


// fetch(`http://localhost:3000/api/v1/goals/${goalId}/steps`, {
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   method: 'POST',
//   body: JSON.stringify(step)
// })
