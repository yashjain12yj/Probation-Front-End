import React from 'react';
import {Link} from 'react-router-dom'

import './Login.css';

function Login() {
  return (
    <div className="container login-form">
    	<h2 className="login-heading">Login</h2>
      <form className="">
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
      </form>
    	<button className="btn btn-primary">Login</button>
      <span class="donotHaveAccountLogin">If you do not have a account <Link to="/signup">Register</Link></span>
    </div>
  );
}

export default Login;
