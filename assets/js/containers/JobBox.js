import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobList from './JobList';
import JobForm from '../components/JobForm';
import { addJob, deleteJob } from '../actions/actions';

class JobBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
      editItem: null,
      isEdit: false
    };
    this.handleEditId = this.handleEditId.bind(this);
  };

  handleEditId(e) {
    this.setState({
      editId: e,
      editItem: this.props.jobs[e],
      isEdit: true
    });
  };

  render() {
    console.log("Rendering JobBox");
    const { jobs, actions } = this.props
    console.log("JobBox editItem", this.state.editItem);
    return (
      <div className="jobBox">
        <Navbar.Collapse>
          <Navbar.Form className="jobForm">
            <FormGroup>
              <h2>Jobs</h2>
              <JobForm
                addJob={actions.addJob}
                deleteJob={actions.deleteJob}
                isEdit={this.state.isEdit}
                editItem={this.state.editItem}
              />
              <JobList
                jobs={jobs}
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
    actions: bindActionCreators({addJob, deleteJob}, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(JobBox);
