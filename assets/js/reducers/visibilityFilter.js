const visibilityFilter = (state = 'SHOW_JOBS', action) => {
  console.log("Received visibilityFilter ", action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log("visibilityFilter returning ", action.filter)
      return action.filter
    default:
      console.log("visibilityFilter returning ", state)
      return state
  }
}

export default visibilityFilter
