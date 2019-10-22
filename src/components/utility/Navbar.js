import React from 'react';

import './Navbar.css';

import {Link} from 'react-router-dom'
import isAuthenticated from './isAuthenticated'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const isLoggedIn = isAuthenticated();
        this.setState({isLoggedIn: isLoggedIn})
    }

    componentDidUpdate(prevProps) {
        const isLoggedIn = isAuthenticated();
        const num = Math.random()
        if (num % 2 === 0) {
            this.setState({isLoggedIn: isLoggedIn})
        }
    }

    handleClick(event) {
        localStorage.removeItem('user');
        this.setState({isLoggedIn: false})
        window.location.reload(false);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">buyNsell</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    {this.state.isLoggedIn ?

                        <form className={"form-inline"}>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <button className="btn btn-outline-success btn-sm mx-lg-3 rounded-circle"
                                       id="navbarDropdown"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Profile
                                    </button>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <Link to="/dashboard" className={"dropdown-item"}>Dashboard</Link>
                                        <Link to="/changePassword" className={"dropdown-item"}>Change Password</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/" className={"dropdown-item"}>
                                            <span className="" href="#"
                                                  onClick={(event) => this.handleClick(event)}>Logout</span>
                                        </Link>
                                    </div>
                                </li>
                            </ul>

                        </form>

                        :
                        <form className={"form-inline"}>
                            <Link to={"/login"} className={"btn btn-outline-success my-2 my-sm-0"}>
                                Login
                            </Link>
                            <Link to={"/signup"} className={"btn btn-outline-success my-2 my-sm-0"}>
                                Register
                            </Link>
                        </form>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;
