import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
