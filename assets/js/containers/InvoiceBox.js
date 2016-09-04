import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react'
import InvoiceForm from '../components/InvoiceForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTime } from '../actions/actions';


const InvoiceBox = ({ time, jobs, jobTitles, onItemClick }) => {
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
              jobTitles={jobTitles}
              onItemClick={onItemClick} />
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => (
  {
    onItemClick: () => {return}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceBox);
