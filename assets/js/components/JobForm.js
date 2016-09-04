import { Navbar, FormGroup,
         FormControl, Button, Table } from 'react-bootstrap';

import React from 'react';


class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hourlyRate: '',
      taxRate: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleHourlyRateChange = this.handleHourlyRateChange.bind(this);
    this.handleTaxRateChange = this.handleTaxRateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    if (this.props.isEdit) {
      this.setState({
        title: this.props.editItem.title,
        hourlyRate: this.props.editItem.hourly_rate,
        taxRate: this.props.editItem.tax_rate,
      });
    };
  };
  handleTitleChange(e) {
    this.setState({title: e.target.value})
  };
  handleHourlyRateChange(e) {
    this.setState({hourlyRate: e.target.value})
  };
  handleTaxRateChange(e) {
    this.setState({taxRate: e.target.value})
  };
  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    let hourlyRate = this.state.hourlyRate.trim();
    let taxRate = this.state.taxRate.trim();
    if (!title || !hourlyRate || !taxRate) {
      return;
    };
    this.props.addJob(title, hourlyRate, taxRate);
    this.setState({
      title: '',
      hourlyRate: '',
      taxRate: '',
    });
  }
  handleDelete(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    let hourlyRate = this.state.hourlyRate.trim();
    let taxRate = this.state.taxRate.trim();
    if (!title || !hourlyRate || !taxRate) {
      return;
    };
    this.props.deleteJob(title);
    this.setState({title: '', hourlyRate: '', taxRate: ''});
  }
  render() {
    console.log("JobForm isEdit", this.props.isEdit);
    return (
          <div>
            <FormControl
              type="text"
              placeholder="Job title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <FormControl
              type="text"
              placeholder="Hourly rate"
              value={this.state.hourlyRate}
              onChange={this.handleHourlyRateChange}
            />
            <FormControl
              type="text"
              placeholder="Tax rate"
              value={this.state.taxRate}
              onChange={this.handleTaxRateChange}
            />
            {' '}
            <Button
              type="submit"
              onClick={(e) => {this.handleSubmit(e)}}>Push</Button>
            { this.props.isEdit ?
            <Button
              type="submit"
              onClick={(e) => {this.handleDelete(e)}}>Delete</Button>
              :
            <div></div>
            }
          </div>
    );
  }
}

export default JobForm;
