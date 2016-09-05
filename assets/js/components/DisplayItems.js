import React from 'react';
import Home from './Home';
import JobBox from '../containers/JobBox';
import TimeBox from '../containers/TimeBox';
import InvoiceBox from './InvoiceBox';
import ErrorComponent from './ErrorComponent';

const DisplayItems = ({ items, jobTitles, filter }) => {
  switch (filter) {
    case 'SHOW_HOME':
      return (
        <Home />
      );
    case 'SHOW_JOBS':
      return (
        <JobBox jobs={items} />
      );
    case 'SHOW_TIME':
      return (
        <TimeBox
          time={items}
          jobTitles={jobTitles}
        />
      );
    case 'SHOW_INVOICES':
      return (
        <InvoiceBox
          time={items.time}
          jobs={items.jobs}
          jobTitles={jobTitles}
        />
      );
    default:
      return (
        <ErrorComponent />
      );
  };
};

export default DisplayItems;
