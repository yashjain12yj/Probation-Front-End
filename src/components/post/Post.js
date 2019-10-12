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
      <div className = "container-fluid create_post_form" >
        <h2>Post</h2>
      </div>
    )
  };
}

export default Post;
