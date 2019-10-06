import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './CreatePostForm.css';


class CreatePostForm extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
   }

render(){
  return (
    <div className="container-fluid create_post_form">
      <div className="row">
          <h2 className="col-sm-12">Sell Item</h2>
      </div>
      <div className="form-group row">
          <label htmlFor="Title" className="col-sm-3 col-form-label"><b>Title</b></label>
          <div className="col-sm-7">
            <input type="text" className="form-control" id="title" />
          </div>
      </div>
    </div>
  )};
}

export default CreatePostForm;
