 
import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    const proxyurl = "https://rodrigo-cors-anywhere.herokuapp.com/";
    const url = "https://jsonplaceholder.typicode.com/posts"; // site that doesn’t send Access-Control-*
    
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(res => res.json())
    .then( posts => 
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      // payload is whatever data is coming in with the type to the reducer
    }));
}


export const createPost = postData => dispatch => {
  console.log(`action called`);  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://jsonplaceholder.typicode.com/posts"; 

    fetch(proxyurl + url, { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then (console.log(postData))
    .then( post => 
      dispatch({
        type: NEW_POST,
        payload: post
  }));
  
}