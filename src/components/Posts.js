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
    .then(response => response.text())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  


//   const testURL = 'https://jsonplaceholder.typicode.com/posts';
// 	const myInit = {
// 		method: 'HEAD',
// 		mode: 'no-cors',
// 	};

// 	const myRequest = new Request(testURL, myInit);

//   fetch(myRequest)
//   .then(res => res.json())
//   .then(data => console.log(data) )
//   .catch( (e) => {
// 		console.log(e);
//   });
// }

  render() {
    return (
      <div>
      <h1>Posts</h1>        
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