import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("Dispatching setVisibilityFilter with ", ownProps.filter)
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink