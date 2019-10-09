import React from 'react';

import {Link} from 'react-router-dom'


function PostButton() {
  return (
    <div className="col col-lg-2 login-btn align-self-center">
      <Link to="/post" style={{ textDecoration: 'none' }}>
        <button className="btn btn-primary">Post</button>
      </Link>
    </div>
  );
}

class LoggedHome extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: false
    }
   }

   render(){
     return(
         <div className="row  justify-content-md-center">
           <PostButton />
         </div>
     );
   }
 }

 export default LoggedHome;
