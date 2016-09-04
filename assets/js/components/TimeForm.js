import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

import React from 'react';
import Dropdown from './Dropdown';

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      minutes: '',
      summary: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({title: e})
  }
  handleMinutesChange(e) {
    this.setState({minutes: e.target.value})
  }
  handleSummaryChange(e) {
    this.setState({summary: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    let minutes = this.state.minutes.trim();
    let summary = this.state.summary.trim();
    if (!title || !minutes || !summary) {
      return;
    }
    this.props.addTime(title, minutes, summary);
    this.setState({title: '', minutes: '', summary: ''})
  }
  render() {
    const { jobTitles } = this.props;
    return (
      <div>
        <Dropdown
          dropDownOptions={jobTitles}
          onClick={this.handleTitleChange}
          title="Job Titles..."
        />
        <FormControl
          readOnly
          type="text"
          placeholder="Job title"
          value={this.state.title}
        />
        <FormControl
          type="text"
          placeholder="Minutes"
          value={this.state.minutes}
          onChange={this.handleMinutesChange}
        />
        <FormControl
          type="text"
          placeholder="Summary of work"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
        {' '}
        <Button
          type="submit"
          onClick={(e) => {this.handleSubmit(e)}}>Push</Button>
      </div>
    );
  }
}

export default TimeForm;
