import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var payload = {
            "usernameOrEmail": this.state.usernameOrEmail,
            "password": this.state.password
        }
        axios.post('/api/auth/signin', payload)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.tokenType === "Bearer") {
                        localStorage.setItem('user', response.data.accessToken)
                        this.props.history.push('/')
                        window.location.reload(false);
                    }
                } else {
                    console.log(response.data)
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert(error.response.data)
                } else if(error.response.status === 400){
                    alert(error.response.data)
                }
            });
    }

    render() {
        return (
            <div className="container login-form">
                <h2 className="login-heading">Login</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group row">
                        <label htmlFor="staticUsernameOrEmail"
                               className="offset-md-3 col-sm-2 col-form-label">Username/Email</label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(event) => this.setState({usernameOrEmail: event.target.value})}
                                required={true}
                                minLength={4}
                                maxLength={30}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="offset-md-3 col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-4">
                            <input
                                type="password"
                                className="form-control"
                                onChange={(event) => this.setState({password: event.target.value})}
                                required={true}
                                minLength={8}
                                maxLength={20}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type={"submit"}>Login</button>
                </form>
                <span className="donotHaveAccountLogin">If you do not have a account <Link to="/signup">Register</Link></span>
            </div>
        )
    };
}

export default Login;
