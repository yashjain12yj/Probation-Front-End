import React from 'react';

import './Home.css';
import LoggedHome from  './LoggedHome'
import NonloggedHome from './NonLoggedHome'
import isAuthenticated from './utility/isAuthenticated'


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false
    }
   }

   componentDidMount(){
     const isLoggedIn = isAuthenticated();
     this.setState({isLoggedIn: isLoggedIn})
   }

  render(){
    return (
      <div className="container-fluid home">
        { this.state.isLoggedIn
          ? <LoggedHome />
          : <NonloggedHome />
        }
      </div>
    );
  }

}

export default Home;
