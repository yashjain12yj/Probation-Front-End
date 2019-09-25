import React from 'react';

import {Link} from 'react-router-dom'

import './Home.css';

function Home() {
  return (
    <div className="container-fluid home">
      <div className="row  justify-content-md-center">
        <div className="col col-lg-2 login-btn align-self-center">
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="btn btn-primary">Login</button></Link>
        </div>
        <div className="col col-lg-2 signup-btn align-self-center">
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="btn btn-primary">Register</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
