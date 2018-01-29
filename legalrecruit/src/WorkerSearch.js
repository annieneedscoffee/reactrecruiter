import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 import './App.css';
 import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Table } from 'reactstrap';

class WorkerSearch extends Component{
render(){
  let listMyJobs = this.props.jobs.map(job => {
  console.log(job)
  return (
<tr>
    <th scope="row">{job.id}></th>
      <td>{job.company}</td>
      <td>{job.description}</td>


    </tr>

  )
})
  return(
  <div>

      <Header />
        <Form>
          <FormGroup>
            <Label for="keyword">Keyword</Label>
            <Input type="keyword" name="keyword" id="keyword" placeholder="keyword" />
          </FormGroup>
          <FormGroup>
            <Label for="Experience">Experience</Label>
            <Input type="select" name="select" id="Years Experience">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Specialty">Specialty</Label>
          <Input type="select" name="select" id="Specialty">
                <option>All</option>
            <option>Bankruptcy</option>
                <option>Civil</option>
                <option>Class Action</option>
                    <option>Compliance</option>
                <option>Contracts</option>
            <option>Corporate</option>
                <option>Criminal</option>
            <option>Defense</option>
                <option>Discovery</option>
            <option>Elder</option>
            <option>Finance</option>
                <option>General</option>
                    <option>Immigration</option>
              <option>Insurance</option>
                  <option>International</option>
                  <option>Labor</option>
              <option>Litigation</option>
                  <option>Malpractice</option>
              <option>Medeation</option>
                  <option>Negotiation</option>
              <option>Other</option>
                <option>Patent</option>
                    <option>Property</option>
              <option>Prosecution</option>
                <option>Real Estate</option>
                    <option>Tax</option>
                    <option>Technology</option>
                        <option>Torts</option>
                            <option>Wills & Trusts</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Place">Place</Label>
          <Input type="select" name="select" id="Place">
            <option>Phoenix</option>
            <option>Tuscon</option>
            <option>Flagstaff</option>
            <option>Washington, DC</option>
            <option>New York</option>
          </Input>
        </FormGroup>

      </Form>
<h3>Results</h3>
          <Table striped>
<thead>
<tr>
  <th>Company</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
{listMyJobs}
</tbody>
</Table>

    <Footer />



</div>
)
}
}

function mapStateToProps(state){
  return {jobs: state.jobs};
}


export default connect(mapStateToProps, null)(WorkerSearch);
