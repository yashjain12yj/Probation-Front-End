import React from 'react';

import './SearchPage.css'
import Cards from './post/Cards'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center search-form">
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="search"
                               placeholder=""/>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

                <div className="search-result">
                    <h3>Recent Posts</h3>
                    <Cards/>
                </div>

            </div>
        );
    }
}

export default Search;
