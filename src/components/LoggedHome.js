import React from 'react';

import {Link} from 'react-router-dom'


function SellButton() {
  return (
    <div className="col col-lg-2 login-btn align-self-center">
      <Link to="/post" style={{ textDecoration: 'none' }}>
        <button className="btn btn-primary">Sell a Item</button>
      </Link>
    </div>
  );
}
function BuyButton() {
    return (
        <div className="col col-lg-2 login-btn align-self-center">
            <Link to="/search" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary">Search for a item</button>
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
           <SellButton />
           <BuyButton />
         </div>
     );
   }
 }

 export default LoggedHome;
