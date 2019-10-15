import React from 'react';
import axios from 'axios';

import './CreatePostForm.css';

// To upload multiple image
// https://codepen.io/mianzaid/pen/GeEbYV
// To preview Images
// https://bootsnipp.com/snippets/eNbOa

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category:'',
      images: [],
      price:'',
      contactName:'',
      contactEmail:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    var formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description)
    formData.append('category', this.state.category)
    formData.append('price', this.state.price)
    formData.append('contactName', this.state.contactName)
    formData.append('contactEmail', this.state.contactEmail)
    for (var i = 0; i < this.state.images.length; i++) {
        let file = this.state.images[i];
        formData.append('images[' + i + ']', file, file.name);
    }

    console.log(formData.get('images[0]'));

    const config = { headers: {
                      'content-type': 'multipart/form-data',
                      'token': localStorage.getItem('user')
                    }}

    axios.post('/api/post/', formData, config)
       .then((response) => {
         if(response.status === 200){
           this.props.history.push('/post/'+response.data)
         }
       })
       .catch((error) => {
          console.log(error)
       })
  }

  onFileChangeHandler(event){
    event.preventDefault();
    var images = []
    for(var i = 0; i < event.target.files.length; i++){
      images.push(event.target.files[i])
    }
    // console.log(images)
    this.setState({
        images: images
    });
    //console.log(images)
  }

  render() {
    return (
      <div className = "container-fluid create_post_form" >
        <div className = "row create_post_form_heading" >
          <h2 className = "col-sm-12" >Sell Item</h2>
        </div >
        <form>
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Title" className = "col-sm-2 col-form-label" >
              <b>Title</b>
            </label >
            <div className = "col-sm-3" >
              <input
                type = "text"
                className = "form-control"
                id = "title"
                onChange= {(event) => this.setState({title:event.target.value})}
              />
            </div>
          </div >
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Category" className = "col-sm-2 col-form-label" >
              <b>Category</b>
            </label >
            <div className = "col-sm-3" >
              <select
                className="custom-select"
                id="inputGroupSelect01"
                defaultValue="select"
                onChange= {(event) => this.setState({category:event.target.value})}
              >
                <option value="Property">Property</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Furniture">Furniture</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Books,sports & hobbies">Books,sports & hobbies</option>
                <option value="Fashion">Fashion</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className = "form-group row justify-content-center" >
            <label htmlFor = "Description" className = "col-sm-2 col-form-label" >
              <b>Description</b>
            </label >
            <div className = "col-sm-3" >
              <textarea
                className="form-control"
                aria-label="description"
                onChange= {(event) => this.setState({description:event.target.value})}
              ></textarea>
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "Images" className = "col-sm-2 col-form-label" >
              <b>Images</b>
            </label >
            <div className = "col-sm-3 custom-file" >
                <input
                  type="file"
                  multiple
                  className="custom-file-input"
                  id="customFile"
                  onChange={this.onFileChangeHandler}
                />
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
                <input
                  type="text"
                  className="form-control"
                  aria-label="price"
                  onChange= {(event) => this.setState({price:event.target.value})}
                />
              </div>
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "ContactName" className = "col-sm-2 col-form-label" >
              <b>Contact Name</b>
            </label >
            <div className = "col-sm-3" >
              <input
                type="text"
                className="form-control"
                id="contactName"
                onChange= {(event) => this.setState({contactName:event.target.value})}
              />
            </div>
          </div>
          <div className = "form-group row justify-content-center">
            <label htmlFor = "ContactEmail" className = "col-sm-2 col-form-label" >
              <b>Contact Email</b>
            </label >
            <div className = "col-sm-3" >
              <input
                type = "email"
                className = "form-control"
                id = "contactEmail"
                onChange= {(event) => this.setState({contactEmail:event.target.value})}
              />
            </div>
          </div>
          <div className = "row justify-content-center">
            <button className="btn btn-primary mb-2" onClick={(event) => this.handleSubmit(event)}>Post</button>
          </div>
        </form>
      </div>
    )
  };
}

export default CreatePostForm;
