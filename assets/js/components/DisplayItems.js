import React from 'react';
import JobBox from '../containers/JobBox';
import TimeBox from '../containers/TimeBox';
import InvoiceList from '../containers/InvoiceList';
import ErrorComponent from './ErrorComponent';

class DisplayItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(3, "DisplayItems component rendering");
    console.log("DisplayItems props ", this.props);
    console.log("visibleItems are: ", this.props.visibleItems)

    const { items, filter } = this.props;

    switch (filter) {
      case 'SHOW_JOBS':
        console.log("Rendering 'SHOW_JOBS' in DisplayItems");
        return (
          <JobBox jobs={items} />
        );
      case 'SHOW_TIME':
        return (
          <TimeBox time={items} />
        );
      case 'SHOW_INVOICES':
        return (
          <InvoiceList />
        );
      default:
        return (
          <ErrorComponent />
        );
    }
  }
}

export default DisplayItems;