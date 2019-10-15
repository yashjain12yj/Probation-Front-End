import React from 'react';

import './Cards.css'
import Card from './Card'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    render() {
        return (
            <div className="container cards">
                <div className="row">
                    {this.props.posts.map((value, index)=>
                         <Card title={value.title} imageUrl={"data:image/png;base64, " + value.images[0].data} id={value.id}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Cards;
