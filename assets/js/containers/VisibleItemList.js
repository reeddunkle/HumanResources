import { connect } from 'react-redux'
import { toggleEdit } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleTodos = (items, filter) => {
  switch (filter) {
    case 'SHOW_JOBS':
      return items.filter(t => t.completed)
    case 'SHOW_TIME':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
)(ItemList)

export default VisibleItemList