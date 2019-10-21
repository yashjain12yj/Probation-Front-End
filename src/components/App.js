import React from 'react';

import './App.css'

import Navbar from './utility/Navbar'
import Login from './login/Login'
import Signup from './login/Signup'
import Home from './Home'
import Search from './SearchPage'
import CreatePostForm from './post/CreatePostForm'
import Post from './post/Post'
import PageNotFound from './utility/PageNotFound'
import isAuthenticated from './utility/isAuthenticated'
import Dashboard from "./user/Dashboard";
import ChangePassword from "./user/ChangePassword";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={
        (props) => {
            if (isAuthenticated()) {
                return <Component {...props} />
            } else {
                alert('Login/Register to continue')
                return <Redirect to={
                    {
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }
                }/>
            }
        }
    }/>
)


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        return (
            <div className="app">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/login' exact={true} component={Login}/>
                        <Route path='/signup' exact={true} component={Signup}/>
                        <PrivateRoute path='/post' exact component={CreatePostForm}/>
                        <Route path='/post/:id' exact component={Post}/>
                        <Route path='/search' exact component={Search}/>
                        <PrivateRoute path='/dashboard' exact component={Dashboard}/>
                        <PrivateRoute path='/changePassword' exact component={ChangePassword}/>
                        <Route path='/*' component={PageNotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
