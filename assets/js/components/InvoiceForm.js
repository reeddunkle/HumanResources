import { Navbar, ButtonGroup,
         FormControl, Button, Table } from 'react-bootstrap';

import React from 'react';
import { msToISO } from '../actions/actions';
import Dropdown from './Dropdown';
import TimeList from '../containers/TimeList';
import Invoice from './InvoiceComponent';


const getDateArray = (title, time) => {
  console.log("Running getDateArray");
  var dates;

  if (title !== '' && title !== undefined){
    dates = time.filter(t => t.title === title).map(t => {
      return msToISO(t.date);
    })
  } else {
    dates = time.map(t => {
      return msToISO(t.date);
    })
  };

  return Array.from(new Set(dates));
};

const setDateStartArray = (dateEnd, dates) => {
  console.log("Running setDateStartArray");
  if (dateEnd !== '' && dateEnd !== undefined) {
    return dates.filter(d => d <= dateEnd);
  } else {
    return dates;
  }
};

const setDateEndArray = (dateStart, dates) => {
  console.log("Running setDateEndArray");
  if (dateStart !== '' && dateStart !== undefined) {
    return dates.filter(d => d >= dateStart);
  } else {
    return dates;
  }
};

const calcTimeInRange = (start, end, title, time) => {
  console.log("Running calcTimeInRange");
  const isGTOE = (t) => (start == '' || msToISO(t.date) >= start);
  const isLTOE = (t) => (end == '' || msToISO(t.date) <= end);
  const hasSameTitle = (t) => (title == '' || t.title === title);

  return time.filter(t => {
    if (isGTOE(t) && isLTOE(t) && hasSameTitle(t)) {
      return t;
    }
  }).sort();
}

const calcMinutes = (time) => {
  return time.reduce((acc, t) => acc + t.minutes, 0);
}

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
  }
  handleTitleChange(e) {
    if (e === 'All') {
      this.setState({
        title: '',
        dateStart: '',
        dateEnd: '',
        hourly_rate: '',
        tax_rate: ''
      })
    } else {
      this.setState({
        title: e,
        dateStart: '',
        dateEnd: '',
        hourly_rate: this.props.jobs[e].hourly_rate,
        tax_rate: this.props.jobs[e].tax_rate
      })
    };
  }
  handleStartDateChange(e) {
    this.setState({dateStart: e});
  }
  handleEndDateChange(e) {
    this.setState({dateEnd: e});
  }
  render() {
    const { time, jobs, jobTitles, onItemClick } = this.props;

    let title = this.state.title.trim();
    let dateStart = this.state.dateStart.trim();
    let dateEnd = this.state.dateEnd.trim();
    let hourly_rate = this.state.hourly_rate;
    let tax_rate = this.state.tax_rate;

    var dateArray = getDateArray(title, time);
    var startDates = setDateStartArray(dateEnd, dateArray);
    var endDates = setDateEndArray(dateStart, dateArray);
    var timeInRange = calcTimeInRange(dateStart, dateEnd, title, time);
    var total_minutes = calcMinutes(timeInRange);

    console.log("timeInRange", timeInRange);
    console.log("total_minutes", total_minutes);

    return (
      <div>
        <div>
          <div>
          <ButtonGroup>
            <Dropdown
              dropDownOptions={jobTitles.concat(["All"])}
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
            placeholder="Job title"
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
          <TimeList
            time={timeInRange}
            onItemClick={onItemClick}
          />
        </div>
          <Invoice
            total_minutes={total_minutes}
            hourly_rate={hourly_rate}
            tax_rate={tax_rate}
          />
      </div>
    );
  }
}

export default InvoiceForm;
