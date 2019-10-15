import React from 'react';

import './SearchPage.css'
import Cards from './post/Cards'
import axios from 'axios'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading:'Recent Posts',
            showPosts: []
        }
    }

    componentDidMount() {
        const config = { headers: {
                'token': localStorage.getItem('user')
            }}

        axios.get('/api/search/recentitems', config)
            .then((response) => {
                this.setState({showPosts: response.data});
                console.log(this.state.showPosts)
            })
            .catch((error) => {
                console.log(error)
            });
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
                    <h3>{this.state.heading}</h3>
                    <Cards posts={this.state.showPosts} />
                </div>
            </div>
        );
    }
}

export default Search;
