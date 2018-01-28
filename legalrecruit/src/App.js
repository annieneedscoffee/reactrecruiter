import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AdminAccount from './AdminAccount';
import CandidateAccount from './CandidateAccount';
import CandidateProfile from './CandidateProfile';
import EmployerAccount from './EmployerAccount';
import JobProfile from './JobProfile';
import JobSearch from './JobSearch';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import WorkerSearch from './WorkerSearch';
import {getAdmins} from './actions/getadmins';
import {getWorkers} from './actions/getworkers';
import {getEmployers} from './actions/getemployers';
import {getJobs} from './actions/getjobs';

class App extends Component {
  componentDidMount(){
    this.props.getAdmins()
    this.props.getWorkers()
    this.props.getEmployers()
    this.props.getJobs()
  }
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/AdminAccount" component={AdminAccount}/>
          <Route exact path="/CandidateAccount" component={CandidateAccount}/>
          <Route exact path="/CandidateProfile" component={CandidateProfile}/>
          <Route exact path="/EmployerAccount" component={EmployerAccount}/>
          <Route exact path="/JobProfile" component={JobProfile}/>
          <Route exact path="/JobSearch" component={JobSearch}/>
          <Route exact path="/LandingPage" component={LandingPage}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/WorkerSearch" component={WorkerSearch}/>
        </div>
      </Router>

    );
  }
}
function mapDispatchToProps(dispatch){
  return{
    getAdmins:bindActionCreators(getAdmins, dispatch),
      getWorkers:bindActionCreators(getWorkers, dispatch),
      getEmployers:bindActionCreators(getEmployers, dispatch),
        getJobs:bindActionCreators(getJobs, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
