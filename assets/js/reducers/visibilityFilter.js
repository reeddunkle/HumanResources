const visibilityFilter = (state = 'SHOW_JOBS', action) => {
  console.log("Received visibilityFilter ", action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
