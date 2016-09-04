import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeList from './TimeList'
import TimeForm from '../components/TimeForm'
import { addTime } from '../actions/actions';


const onItemClick = (id) => {
  console.log("You clicked comp with id: ", id);
}

class TimeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null
    };
    this.handleEditId = this.handleEditId.bind(this);
  };
  handleEditId(e) {
    this.setState({editId: e});
  };

  render() {
    const { time, jobTitles, actions } = this.props;
    var timeArray = Object.keys(time).sort().map(key => {
      return {...time[key], id: key};
    });
    return (
      <div className="timeBox">
        <Navbar.Collapse>
          <Navbar.Form className="jobForm">
            <FormGroup>
              <h2>Time Logged</h2>
              <TimeForm
                addTime={actions.addTime}
                jobTitles={jobTitles}
                editId={this.state.editId}
              />
              <TimeList
                time={timeArray}
                onItemClick={this.handleEditId}
              />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </div>
    );
  };
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators({ addTime }, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TimeBox)
