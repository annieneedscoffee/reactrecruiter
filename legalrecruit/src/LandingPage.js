import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody, Alert } from 'reactstrap';
 import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class LandingPage extends Component{
  render(){
    return(
<div>
  <Header />
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Find Talent</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button tag={Link} to="/WorkerSearch">Find Talent</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Contact Us</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Find A Job</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button tag={Link} to="/JobSearch">Find a Job</Button>
        </CardBody>
      </Card>
    </CardGroup>
<Footer />

</div>

    ) }
  }
  export default LandingPage;
