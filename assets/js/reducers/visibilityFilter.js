const visibilityFilter = (state = 'SHOW_HOME', action) => {
  console.log("Received visibilityFilter ", action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log("visibilityFilter returning ", action.filter)
      return action.filter
    default:
      console.log("visibilityFilter returning default ", state)
      return state
  }
}

export default visibilityFilter
