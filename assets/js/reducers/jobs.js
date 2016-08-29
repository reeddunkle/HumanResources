const job = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_JOB':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const jobs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return [
        ...state,
        job(undefined, action)
      ]
    case 'TOGGLE_JOB':
      return state.map(t =>
        job(t, action)
      )
    default:
      return state
  }
}

export default jobs