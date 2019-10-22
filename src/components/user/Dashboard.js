import React from 'react';

import './Dashboard.css'
import Cards from '../post/Cards'
import axios from 'axios'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            heading: 'Your Items'
        }
    }

    componentDidMount() {
        const config = {
            headers: {
                'token': localStorage.getItem('user')
            }
        }

        axios.get('/api/user/dashboard', config)
            .then((response) => {
                // console.log(response)
                if (response.status === 200){
                    this.setState({items: response.data.items});
                    if (response.data.items.length !== 0)
                        this.setState({heading: "Your Items"});
                    else
                        this.setState({heading: "You have not posted any item yet"});
                    console.log(this.state.items)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="user-posts">
                    <h3>{this.state.heading}</h3>
                    <Cards posts={this.state.items} toggleAvailability={true}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
