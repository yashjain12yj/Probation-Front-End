import React from 'react';

import './Navbar.css';

import { Link } from 'react-router-dom'
import isAuthenticated from './isAuthenticated'

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
   }

   componentDidMount(){
     const isLoggedIn = isAuthenticated();
     this.setState({isLoggedIn: isLoggedIn})
   }

   componentDidUpdate(prevProps){
     console.log(prevProps)
     const isLoggedIn = isAuthenticated();
     const num = Math.random()
     if(num%2 === 0){
        this.setState({isLoggedIn: isLoggedIn})
     }
   }

  handleClick(event){
    localStorage.removeItem('user');
    this.setState({isLoggedIn: false})
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">buyNsell</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          { this.state.isLoggedIn ?
          <form className="my-2 my-lg-0">
            <Link to="/"><button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={(event) => this.handleClick(event)}>Logout</button></Link>
          </form> : ''
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;
