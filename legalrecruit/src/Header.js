import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 import './App.css';
 import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Nav, NavItem, NavLink, Jumbotron, Button, Container,   Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,

CardImg,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Media } from 'reactstrap';

class Header extends Component{
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
render(){
  return(
  <div>
    <Jumbotron>
      <Navbar color="faded" light expand="md">
          <NavbarBrand href="/LandingPage">Continuum Legal</NavbarBrand>
    


          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/JobSearch">Job Seekers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/WorkerSearch">Talent Seekers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignUp">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignUp">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


    </Jumbotron>

</div>
)
}
}
export default Header;
