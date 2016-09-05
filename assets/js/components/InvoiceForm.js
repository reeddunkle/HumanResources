import { Navbar, ButtonGroup,
         FormControl, Button, Table } from 'react-bootstrap';

import { msToISO, getDateArray, setDateStartArray,
         setDateEndArray, calcTimeInRange, calcMinutes } from '../actions/toolkit';

import React from 'react';
import Dropdown from './Dropdown';
import InvoiceList from './InvoiceList';
import InvoiceSummary from './InvoiceSummary';


class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dateStart: '',
      dateEnd: '',
      hourly_rate: '',
      tax_rate: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  };
  handleTitleChange(e) {
    if (e === 'SHOW ALL') {
      this.setState({
        title: '',
        dateStart: '',
        dateEnd: '',
        hourly_rate: '',
        tax_rate: ''
      });
    } else {
      this.setState({
        title: e,
        dateStart: '',
        dateEnd: '',
        hourly_rate: this.props.jobs[e].hourly_rate,
        tax_rate: this.props.jobs[e].tax_rate
      });
    };
  };
  handleStartDateChange(e) {
    this.setState({dateStart: e});
  };
  handleEndDateChange(e) {
    this.setState({dateEnd: e});
  };
  render() {
    const { time, jobs, jobTitles } = this.props;

    var title = this.state.title.trim();
    var dateStart = this.state.dateStart.trim();
    var dateEnd = this.state.dateEnd.trim();
    var hourly_rate = this.state.hourly_rate;
    var tax_rate = this.state.tax_rate;

    var dateArray = getDateArray(title, time);
    var startDates = setDateStartArray(dateEnd, dateArray);
    var endDates = setDateEndArray(dateStart, dateArray);
    var timeInRange = calcTimeInRange(dateStart, dateEnd, title, time);
    var total_minutes = calcMinutes(timeInRange);

    return (
      <div>
        <div>
          <div>
          <ButtonGroup>
            <Dropdown
              dropDownOptions={jobTitles.concat(["SHOW ALL"])}
              onClick={this.handleTitleChange}
              title="Job Title"
            />
            <Dropdown
              dropDownOptions={startDates}
              onClick={this.handleStartDateChange}
              title="Start Date"
            />
            <Dropdown
              dropDownOptions={endDates}
              onClick={this.handleEndDateChange}
              title="End Date"
            />
          </ButtonGroup>
          </div>
          <FormControl
            readOnly
            type="text"
            placeholder="Job Title (Required)"
            value={this.state.title}
          />
          <FormControl
            readOnly
            type="text"
            placeholder="Start Date"
            value={this.state.dateStart}
          />
          <FormControl
            readOnly
            type="text"
            placeholder="End Date"
            value={this.state.dateEnd}
          />
        </div>
        <div>
          <InvoiceList
            time={timeInRange}
          />
        </div>
          <InvoiceSummary
            total_minutes={total_minutes}
            hourly_rate={hourly_rate}
            tax_rate={tax_rate}
          />
      </div>
    );
  };
};

export default InvoiceForm;
