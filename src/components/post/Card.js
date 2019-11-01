import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    handleDelete(event) {
        event.preventDefault();
        console.log("Delete post")
        const config = {
            data: {'id': parseInt(this.props.id)},
            headers: {
                'token': localStorage.getItem('user'),
            }
        }

        axios.delete('/api/private/post/delete', config)
            .then((response) => {
                if (response.status === 200) {
                    window.location.reload();
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    alert(error.response.data);
                }
            })
    }

    toggleChange(event) {
        if (event.target.checked) {
            // mark as sold
            const config = {
                headers: {
                    'token': localStorage.getItem('user'),
                }
            }
            const payload = {
                'id': parseInt(this.props.id)
            }

            axios.post('/api/private/post/markSold', payload, config)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("marked sold");
                        // alert("marked sold");
                    }
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        alert(error.response.data);
                    }
                })
        } else {
            // mark as available
            const config = {
                headers: {
                    'token': localStorage.getItem('user'),
                }
            }
            const payload = {
                'id': parseInt(this.props.id)
            }

            axios.post('/api/private/post/markAvailable', payload, config)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("marked Available");
                        // alert("marked Available");

                    }
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        alert(error.response.data);
                    }
                })
        }
    }

    render() {


        return (
            <div className="card col-sm-3">
                <div className="card-title">
                    <h4>Title
                        {this.props.toggleAvailability &&
                        <span>
                                <i className="fas fa-ellipsis-v card-title-heading " id="cardMenuButton"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                <div className="dropdown-menu" aria-labelledby="cardMenuButton">
                                    <Link to={"/edit/" + this.props.id} className="dropdown-item">Edit</Link>
                                    <a className="dropdown-item" href="/sdf" onClick={(event) => {
                                        if (window.confirm('Delete the item?')) {
                                            this.handleDelete(event)
                                        }
                                        ;
                                    }}>Delete</a>
                                </div>
                            </span>
                        }

                    </h4>
                </div>
                <img src={this.props.imageUrl} className="card-img-top" alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-price">Rs.{this.props.price}</h6>
                    <div className="row">
                        <div className={"col-6"}>
                            <Link to={"/post/" + this.props.id} className="btn btn-primary">View</Link>
                        </div>
                        {this.props.toggleAvailability &&
                        <div className={"col-6"}>
                            Sold
                            {this.props.available ?
                                <input type="checkbox" onChange={(event) => this.toggleChange(event)}
                                       aria-label="mark as sold"/>
                                :
                                <input type="checkbox" onChange={(event) => this.toggleChange(event)}
                                       aria-label="mark as sold" checked/>
                            }

                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
