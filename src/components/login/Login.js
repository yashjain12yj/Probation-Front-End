import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Login.css';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      usernameOrEmail:'',
      password:''
    }
   }

   handleClick(event){
     var payload={
     "usernameOrEmail":this.state.usernameOrEmail,
     "password":this.state.password
     }
     console.info(payload);
     axios.post('/auth/signin', payload)
        .then(function (response) {
          console.log(response);
          if(response.data.code === 200){
            console.log("Login successfull");
          }
          else if(response.data.code === 204){
              console.log(response.data.message)
              alert("username password do not match")
          }
          else{
              console.log(response.data.message)
              alert("Username does not exist");
          }
         })
        .catch(function (error) {
            console.log(error);
         });
   }

render(){
  return (
    <div className="container login-form">
    	<h2 className="login-heading">Login</h2>
      <form className="">
        <div className="form-group row">
          <label htmlFor="staticUsernameOrEmail" className="offset-md-3 col-sm-2 col-form-label">Username/Email</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              onChange = {(event) => this.setState({usernameOrEmail:event.target.value})}
              />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="offset-md-3 col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              onChange = {(event) => this.setState({password:event.target.value})}
            />
          </div>
        </div>
      </form>
    	<button className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Login</button>
      <span className="donotHaveAccountLogin">If you do not have a account <Link to="/signup">Register</Link></span>
    </div>
  )};
}

export default Login;
