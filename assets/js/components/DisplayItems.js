import React from 'react';
import JobBox from '../containers/JobBox';
import TimeBox from '../containers/TimeBox';
import InvoiceList from '../containers/InvoiceList';
import ErrorComponent from './ErrorComponent';

class DisplayItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Mounting DisplayItems");
    const { loadData } = this.props;
    loadData();
  }

  render() {
    console.log(3, "ItemsList component rendering");
    console.log("ItemsList props ", this.props);
    console.log("visibleItems are: ", this.props.visibleItems)

    const { items, filter } = this.props;

    switch (filter) {
      case 'SHOW_JOBS':
        console.log("Rendering JobsDisplay");
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