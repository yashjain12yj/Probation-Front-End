import React from 'react';

import './App.css'

import Navbar from './utility/Navbar'
import Login from './login/Login'
import Signup from './login/Signup'
import Home from './Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/signup' exact={true} component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;