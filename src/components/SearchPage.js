import React from 'react';

import './SearchPage.css'
import Cards from './post/Cards'
import axios from 'axios'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            showPosts: [],
            searchQuery: ""
        }
        this.submitSearch = this.submitSearch.bind(this);
    }

    submitSearch(event) {
        event.preventDefault();
        const config = {
            headers: {
                'token': localStorage.getItem('user'),
                'searchQuery': this.state.searchQuery
            }
        }
        const payload = {
            "searchQuery": this.state.searchQuery
        }
        axios.post('/api/search/searchItems', payload, config)
            .then((response) => {
                if (response.data.length === 0){
                    this.setState({heading: "No item found"});
                }else{
                    this.setState({heading: "Search Result"});
                }
                this.setState({showPosts: response.data});
                console.log(this.state.showPosts)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        const config = {
            headers: {
                'token': localStorage.getItem('user')
            }
        }

        axios.get('/api/search/recentitems', config)
            .then((response) => {
                this.setState({showPosts: response.data});
                if (response.data.length !== 0)
                    this.setState({heading: "Recent items"});
                console.log(this.state.showPosts)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row justify-content-center search-form">

                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                onChange={(event) => this.setState({searchQuery: event.target.value})}
                                required={true}
                            />
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-primary" type={"submit"}>Search</button>
                        </div>

                    </div>
                </form>

                <div className="search-result">
                    <h3>{this.state.heading}</h3>
                    <Cards posts={this.state.showPosts}/>
                </div>
            </div>
        );
    }
}

export default Search;
