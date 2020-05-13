import React, { Component } from 'react'
import axios from 'axios';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state= {
      posts: []
    }
  };

  //unsafe is the way to go now acording to react DOCS. 
  //problematic lifecycle methods not recommended by react.
  UNSAFE_componentWillMount() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jsonplaceholder.typicode.com/posts"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(res => res.json())
    .then(data => this.setState({ posts: data }))
    .then(data => console.log(`data is:`, data))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }


  render() {
    const postItems = this.state.posts.map( post => (
      <div key={post.id} className='one-post'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
      <h1>Posts</h1>
      { postItems }
    
      </div>
    )
  }
}
  
  export default Posts;




// cors issues when calling apis
    // const noCorsInit = {
    //   method: 'HEAD',
    //   mode: 'no-cors'
    // };
    // const myRequest = new Request('https://jsonplaceholder.typicode.com/posts', noCorsInit);
  
    // // axios.get('https://jsonplaceholder.typicode.com/posts')
    // fetch('https://jsonplaceholder.typicode.com/posts', noCorsInit)
    // .then(res => res.json())
    // .then(data => console.log(data) )