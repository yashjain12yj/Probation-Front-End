import React from 'react';
import {Link} from 'react-router-dom'

import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="card col-sm-3">
                <img src={this.props.imageUrl} className="card-img-top" alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <Link to={"/post/"+this.props.id} className="btn btn-primary">View</Link>
                </div>
            </div>
        );
    }
}

export default Card;
