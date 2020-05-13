 
import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  console.log(`...fetching`);  
  
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jsonplaceholder.typicode.com/posts"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(res => res.json())
    .then( posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      // payload is whatever data is coming in with the type to the reducer
    }));
}