import React from 'react';
import {Link} from 'react-router-dom'

import './Signup.css';


function Signup() {
  return (
    <div className="container signup-form">
    	<h2 className="signup-heading">Register</h2>
      <form className="">
      <div className="form-group row">
        <label for="staticEmail" className="offset-md-3 col-sm-2 col-form-label">Name</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="name" placeholder="xyz" />
        </div>
      </div>
        <div className="form-group row">
          <label for="staticEmail" className="offset-md-3 col-sm-2 col-form-label">Email</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="offset-md-3 col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputConfirmPassword" className="offset-md-3 col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-4">
            <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="form-group row">
          <label for="mobile" className="offset-md-3 col-sm-2 col-form-label">Mobile</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="mobile" />
          </div>
        </div>
      </form>
    	<button className="btn btn-primary">Register</button>
      <span class="alreadyHaveAccountSignup">If you already have a account <Link to="/login">Login</Link></span>
    </div>
  );
}

export default Signup;
