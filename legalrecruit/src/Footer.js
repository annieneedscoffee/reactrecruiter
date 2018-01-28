import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';
import './App.css';
const Footer = () => {
  return(

<div>
  <Alert color="dark">
           <div class="container">
             <div class="row">
               <div class="col l6 s12">
                 <h5 class="white-text">Corporate Office</h5>
                 <p class="grey-text text-lighten-4">
  1651 Old Meadow Rd., Ste. 600
  </p>
  <p class="grey-text text-lighten-4">
  McLean, VA 22102
  </p>
  <p class="grey-text text-lighten-4">
  Phone: (703) 564-1649
  </p>
  <p class="grey-text text-lighten-4">
  Fax: (703)734-1932</p>
               </div>
               <div class="col l4 offset-l2 s12">
                 <h5 class="white-text">I want to . . . </h5>
                 <ul>
                   <li><a class="grey-text text-lighten-3" href="./JobSearch.html">Find a job</a></li>
                   <li><a class="grey-text text-lighten-3" href="./WorkerSearch.html">Find talent</a></li>
                   <li><a class="grey-text text-lighten-3" href="./SignUp.html">Login</a></li>
                   <li><a class="grey-text text-lighten-3" href="./SignUp.html">Sign Up</a></li>
                 </ul>
               </div>
             </div>
           </div>
           <div class="footer-copyright">
             <div class="container">
             © 2018 Copyright Continuum Legal
             <a class="grey-text text-lighten-4 right" href="#!">Photo by Anders Jildén on Unsplash</a>
             </div>
           </div>
         </Alert>

 </div>
 )
}

export default Footer;
