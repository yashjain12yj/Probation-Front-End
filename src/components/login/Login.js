import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Login.css';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usernameOrEmail:'',
      password:''
    };
    this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event){
     var payload={
     "usernameOrEmail":this.state.usernameOrEmail,
     "password":this.state.password
     }

     axios.post('/api/auth/signin', payload)
        .then((response) => {
          if(response.status === 200){
            if(response.data.tokenType === "Bearer"){
              localStorage.setItem('user', response.data.accessToken)
              console.log(this.props)
              this.props.history.push('/')
              window.location.reload(false);
            }
          }
          else{
              console.log(response.data)
          }
         })
        .catch((error) => {
          if(error.response.status === 401){
            alert(error.response.data)
            console.log(error.response);
          }
         });
   }

render(){
  return (
    <div className="container login-form">
    	<h2 className="login-heading">Login{localStorage.getItem('user')}</h2>
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
