import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTime } from '../actions/actions';
import InvoiceForm from './InvoiceForm'


const InvoiceBox = ({ time, jobs, jobTitles }) => {
  var timeArray = Object.keys(time).sort().map(key => {
    return {...time[key], id: key};
  });
  return (
    <div className="invoiceBox">
      <Navbar.Collapse>
        <Navbar.Form className="invoiceForm">
          <FormGroup>
            <h2>Invoices</h2>
            <InvoiceForm
              time={timeArray}
              jobs={jobs}
              jobTitles={jobTitles} />
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  );
};

export default InvoiceBox;
