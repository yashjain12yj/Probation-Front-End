import React from 'react';
import axios from 'axios';

import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "yash"
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/api/post/${params.id}`)
      .then((response) => {
        if(response.status === 200){
            console.log(response.data);
        }
      });
  }

  render() {
    return (
      <div className = "container-fluid post border" >
        <div className="row border">
          <div className="col-sm-8 border">
            <h2>Carousel</h2>

          </div>
          <div className="col-sm-4 border">
            <div className="row">
              <div className="col-sm-12 border">
                <h2>Price</h2>
              </div>
              <div className="col-sm-12 border">
                <h2>Seller Detail</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 border">
            <h2>Description</h2>
          </div>
        </div>
      </div>
    )
  };
}

export default Post;
