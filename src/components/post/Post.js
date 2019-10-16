import React from 'react';
import axios from 'axios';

import './Post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            description: '',
            category: '',
            available: false,
            contactName: '',
            contactEmail: '',
            createdAt: '',
            price: 0.0,
            images: [],
            user: {}
        };
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

    render() {
        return (
            <div className = "container post" >
                <div className="row upper-part">
                    <div className="col-sm-8 ">
                        <div id="postCarousel" className="carousel " data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                {this.state.images.map((value, index) => {
                                    console.log(index)
                                    if (index === 0)
                                        return <li data-target="#postCarousel" data-slide-to={index} className="active"></li>
                                    return <li data-target="#postCarousel" data-slide-to={index}></li>
                                })}
                            </ol>
                            <div className="carousel-inner">
                                {this.state.images.map((value, index) => {
                                    if (index === 0)
                                        return <div className="carousel-item active"><img className="tales d-block" src={"data:image/png;base64, " +value.data} alt={index+" slide"} /></div>
                                    return <div className="carousel-item"><img className="tales d-block" src={"data:image/png;base64, " +value.data} alt={index+" slide"} /></div>
                                })}
                            </div>
                            <a className="carousel-control-prev" href="#postCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#postCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="row item-title ">
                                    <h2>{this.state.title}</h2>
                                </div>
                                <div className="row item-price ">
                                    <h3><i className="fas fa-rupee-sign price"> {this.state.price}</i></h3>
                                </div>
                                <div className="row item-available ">
                                    <h4>Availability {this.state.available ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }</h4>
                                </div>
                                <div className="row item-posted ">
                                    <h6><b>Posted On: </b><span>{this.state.createdAt}</span></h6>
                                </div>
                            </div>
                            <div className="col-sm-12 ">
                                <div className="seller-details">
                                    <h4><u>Seller Detail</u></h4>
                                    <h5><strong>Name:</strong> {this.state.contactName}</h5>
                                    <h6><strong>Email:</strong> {this.state.contactEmail}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row description">
                    <div className="col-sm-12 ">
                        <h2>Description</h2>
                        <div>{this.state.description}</div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Post;
