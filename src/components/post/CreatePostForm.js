import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './CreatePostForm.css';


// To upload multiple image
// https://codepen.io/mianzaid/pen/GeEbYV
// To preview Images
// https://bootsnipp.com/snippets/eNbOa

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className = "container-fluid create_post_form" >
        <div className = "row create_post_form_heading" >
          <h2 className = "col-sm-12" > Sell Item </h2>
        </div >
        <form>
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Title" className = "col-sm-2 col-form-label" >
              <b>Title</b>
            </label >
            <div className = "col-sm-3" >
              <input type = "text" className = "form-control" id = "title" />
            </div>
          </div >
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Category" className = "col-sm-2 col-form-label" >
              <b>Category</b>
            </label >
            <div className = "col-sm-3" >
              <select className="custom-select" id="inputGroupSelect01" defaultValue="select">
                <option value="1">Properties</option>
                <option value="2">Cars</option>
                <option value="3">Furniture</option>
                <option value="4">Mobile</option>
                <option value="5">Electronics</option>
                <option value="6">Books,sports & hobbies</option>
                <option value="7">Fashion</option>
                <option value="8">Others</option>
              </select>
            </div>
          </div>
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Description" className = "col-sm-2 col-form-label" >
              <b>Description</b>
            </label >
            <div className = "col-sm-3" >
              <textarea className="form-control" aria-label="description"></textarea>
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "Images" className = "col-sm-2 col-form-label" >
              <b>Images</b>
            </label >
            <div className = "col-sm-3 custom-file" >
                <input type="file" multiple className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Choose images</label>
            </div>
          </div>

          <div className = "form-group row justify-content-center" id="image_preview">

          </div>
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Price" className = "col-sm-2 col-form-label" >
              <b>Price</b>
            </label >
            <div className = "col-sm-3" >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">₹</span>
                </div>
                <input type="text" className="form-control" aria-label="price" />
              </div>
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "ContactName" className = "col-sm-2 col-form-label" >
              <b>Contact Name</b>
            </label >
            <div className = "col-sm-3" >
              <input type = "text" className = "form-control" id = "contactName" />
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "ContactEmail" className = "col-sm-2 col-form-label" >
              <b>Contact Email</b>
            </label >
            <div className = "col-sm-3" >
              <input type = "text" className = "form-control" id = "contactEmail" />
            </div>
          </div>
          <div className = "row justify-content-center">
            <button type="submit" className="btn btn-primary mb-2">Post</button>
          </div>
        </form>
      </div>
    )
  };
}

export default CreatePostForm;
