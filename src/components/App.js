import React from 'react';

import './App.css'

import Navbar from './utility/Navbar'
import Login from './login/Login'
import Signup from './login/Signup'
import Home from './Home'
import CreatePostForm from './post/CreatePostForm'
import PageNotFound from './utility/PageNotFound'
import isAuthenticated from './utility/isAuthenticated'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props) => {
      console.log(isAuthenticated())
      if(isAuthenticated()){
        return <Component {...props} />
      }else{
        alert('Login/Register to continue')
        return <Redirect to={
          {
              pathname:"/login",
              state: {
                from: props.location
              }
          }
        } />
      }
    }
  } />
)



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false
    }
   }

   render(){
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/login' exact={true} component={Login}/>
            <Route path='/signup' exact={true} component={Signup}/>
            <PrivateRoute path='/post' exact component={CreatePostForm} />
            <Route path='/*' component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
