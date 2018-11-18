import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

class Posts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => console.log(res))
  }

  render() {

    const postItems  = this.state.posts.map(post => {
      return (<div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>)
    });

    return(
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;
