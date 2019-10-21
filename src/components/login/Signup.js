import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './Signup.css'


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
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
                if (response.status === 200) {
                    alert(response.data)
                    this.props.history.push('/login')
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                if (error.response.status === 400){
                    alert(error.response.data);
                } else if (error.response.status === 500){
                    alert(error.response.data);
                } else{
                    alert('Some error occurred Retry')
                }
            });

    }

    render() {
        return (
            <div className="container signup-form">
                <h2 className="signup-heading">Register</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group row">
                        <label htmlFor="staticName" className="offset-md-3 col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(event) => this.setState({name: event.target.value})}
                                required={true}
                                minLength={4}
                                maxLength={40}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticUsername" className="offset-md-3 col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(event, newValue) => this.setState({username: event.target.value})}
                                required={true}
                                minLength={4}
                                maxLength={20}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="offset-md-3 col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-4">
                            <input
                                type="email"
                                className="form-control"
                                onChange={(event, newValue) => this.setState({email: event.target.value})}
                                required={true}
                                maxLength={40}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="offset-md-3 col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-4">
                            <input
                                type="password"
                                className="form-control"
                                onChange={(event, newValue) => this.setState({password: event.target.value})}
                                required={true}
                                minLength={8}
                                maxLength={20}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputConfirmPassword" className="offset-md-3 col-sm-2 col-form-label">Confirm
                            Password</label>
                        <div className="col-sm-4">
                            <input
                                type="password"
                                className="form-control"
                                onChange={(event, newValue) => this.setState({confirmPassword: event.target.value})}
                                required={true}
                                minLength={8}
                                maxLength={20}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type={"submit"}>Register</button>
                </form>
                <span className="alreadyHaveAccountSignup">If you already have a account <Link to="/login">Login</Link></span>
            </div>
        )
    };
}

export default Signup;
