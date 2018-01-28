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
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem } from 'reactstrap';

class WorkerSearch extends Component{
render(){
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
            <Input type="select" name="select" id="Experience">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Specialty">Specialty</Label>
          <Input type="select" name="select" id="Specialty">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Place">Place</Label>
          <Input type="select" name="select" id="Place">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <h3>Results</h3>
        <ListGroup>
          <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
        </ListGroup>


        </Form>
    <Footer />



</div>
)
}
}
export default WorkerSearch;
