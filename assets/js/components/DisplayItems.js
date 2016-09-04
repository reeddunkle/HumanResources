import React from 'react';
import Home from './Home';
import JobBox from '../containers/JobBox';
import TimeBox from '../containers/TimeBox';
import InvoiceBox from '../containers/InvoiceBox';
import ErrorComponent from './ErrorComponent';

class DisplayItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(3, "DisplayItems component rendering");
    console.log("DisplayItems props ", this.props);

    const { items, jobTitles, filter } = this.props;

    switch (filter) {
      case 'SHOW_HOME':
        return (<Home />);
      case 'SHOW_JOBS':
        console.log("Rendering 'SHOW_JOBS' in DisplayItems");
        return (<JobBox jobs={items} />);
      case 'SHOW_TIME':
        return (<TimeBox time={items} jobTitles={jobTitles} />);
      case 'SHOW_INVOICES':
        console.log("Returning InvoiceBox container");
        return (
          <InvoiceBox
            time={items.time}
            jobs={items.jobs}
            jobTitles={jobTitles}
          />
        );
      default:
        return (<ErrorComponent />);
    }
  }
}

export default DisplayItems;
