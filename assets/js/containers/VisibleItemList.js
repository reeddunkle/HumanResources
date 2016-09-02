import { connect } from 'react-redux'
import { toggleEdit } from '../actions'
import DisplayItems from '../components/DisplayItems'

const getVisibleTodos = (items, filter) => {
  console.log("Received getVisibleTodos dispatch ", filter);
  switch (filter) {
    case 'SHOW_JOBS':
      return items.jobs
    case 'SHOW_TIME':
      return items.time
    case 'SHOW_INVOICES':
      return items.invoices
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleTodos(state.displayItems, state.visibilityFilter),
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleEdit(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayItems)

export default VisibleItemList