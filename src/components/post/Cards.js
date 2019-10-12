import React from 'react';

import './Cards.css'
import Card from './Card'

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="container cards">
                <div className="row">
                    <Card
                        title={"Car"}
                        imageUrl={"https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/6401200x900_1_640x480.jpg"}
                        id={8}
                    />
                    <Card
                        title={"Car"}
                        imageUrl={"https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/6401200x900_1_640x480.jpg"}
                        id={8}
                    />
                    <Card
                        title={"Car"}
                        imageUrl={"https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/6401200x900_1_640x480.jpg"}
                        id={8}
                    />
                    <Card
                        title={"Car"}
                        imageUrl={"https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/6401200x900_1_640x480.jpg"}
                        id={8}
                    />
                    <Card
                        title={"Car"}
                        imageUrl={"https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/6401200x900_1_640x480.jpg"}
                        id={8}
                    />
                </div>
            </div>
        );
    }
}

export default Cards;
