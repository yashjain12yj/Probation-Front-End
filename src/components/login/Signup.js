import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './Signup.css'


class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const payload = {
            "name": this.state.name,
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword
        }

        axios.post("api/auth/signup", payload)
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    alert(response.data)
                    this.props.history.push('/login')
                }
                else if(response.status === 208){
                    alert(response.data)
                }
                else if(response.status === 400){
                    alert(response.data)
                }
                else{
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                alert('Invalid data')
            });

    }
    render(){
        return (
            <div className="container signup-form">
                <h2 className="signup-heading">Register</h2>
                <form className="">
                    <div className="form-group row">
                        <label htmlFor="staticName" className="offset-md-3 col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange = {(event) => this.setState({name:event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticUsername" className="offset-md-3 col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange = {(event,newValue) => this.setState({username:event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="offset-md-3 col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange = {(event,newValue) => this.setState({email:event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="offset-md-3 col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-4">
                            <input
                                type="password"
                                className="form-control"
                                onChange = {(event,newValue) => this.setState({password:event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputConfirmPassword" className="offset-md-3 col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-4">
                            <input
                                type="password"
                                className="form-control"
                                onChange = {(event,newValue) => this.setState({confirmPassword:event.target.value})}
                            />
                        </div>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Register</button>
                <span className="alreadyHaveAccountSignup">If you already have a account <Link to="/login">Login</Link></span>
            </div>
        )
    };
}

export default Signup;
