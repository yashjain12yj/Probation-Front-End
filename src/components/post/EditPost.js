import React from 'react';

import './EditPost.css'
import axios from "axios";


class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Submitting Form")
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`/api/post/${params.id}`)
            .then((response) => {
                if(response.status === 200){
                    this.setState(response.data);
                    console.log(this.state)
                }
            });
    }

    onFileChangeHandler(event) {
        event.preventDefault();
        console.log(event.target.files);
        let images = [];
        var filesNames = [];
        for (let i = 0; i < event.target.files.length; i++) {
            images.push(event.target.files[i]);
            filesNames.push(event.target.files[i].name)
        }
        this.setState({
            images: images,
            fileNames: filesNames.join(", ").substr(0,40)+"......"
        });
    }

    render() {
        return (
            <div className="container-fluid create_post_form">
                <div className="row create_post_form_heading">
                    <h2 className="col-sm-12">Edit Item</h2>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="Title" className="col-sm-2 col-form-label">
                            <b>Title</b>
                        </label>
                        <div className="col-sm-5">
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                onChange={(event) => this.setState({title: event.target.value})}
                                required={true}
                                minLength={5}
                                maxLength={50}
                                value={this.state.title}
                            />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="Category" className="col-sm-2 col-form-label">
                            <b>Category</b>
                        </label>
                        <div className="col-sm-5">
                            <select
                                className="custom-select"
                                id="inputGroupSelect01"
                                onChange={(event) => this.setState({category: event.target.value})}
                                required={true}
                                value={this.state.category}
                            >
                                <option value="">Select</option>
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
                    <div className="form-group row justify-content-center">
                        <label htmlFor="Description" className="col-sm-2 col-form-label">
                            <b>Description</b>
                        </label>
                        <div className="col-sm-5">
                          <textarea
                              className="form-control"
                              aria-label="description"
                              onChange={(event) => this.setState({description: event.target.value})}
                              required={true}
                              minLength={15}
                              maxLength={3000}
                              value={this.state.description}
                          />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="Images" className="col-sm-2 col-form-label">
                            <b>Images</b>
                        </label>
                        <div className="col-sm-5 custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="imageInput"
                                multiple
                                onChange={this.onFileChangeHandler}
                                required={true}
                                minLength={1}
                                maxLength={10}
                                accept="image/*"
                            />
                            <label className="custom-file-label" htmlFor="imageInput">{this.state.fileNames}</label>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <label htmlFor="Price" className="col-sm-2 col-form-label">
                            <b>Price</b>
                        </label>
                        <div className="col-sm-5">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">₹</span>
                                </div>
                                <input
                                    type={"number"}
                                    className="form-control"
                                    aria-label="price"
                                    onChange={(event) => this.setState({price: event.target.value})}
                                    required={true}
                                    min={1}
                                    max={10000000}
                                    value={this.state.price}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <button className="btn btn-primary mb-2" type={"submit"}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditPost;