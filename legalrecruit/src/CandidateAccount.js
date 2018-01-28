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

class CandidateAccount extends Component{
render(){
  return(
  <div>
    <Header />
  <h1>Boof!</h1>
  <Footer />

</div>
)
}
}
export default CandidateAccount;
