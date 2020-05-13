import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    title: '',
    body: ''
  };

  this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jsonplaceholder.typicode.com/posts"; // site that doesn’t send Access-Control-*
    
    // https://cors-anywhere.herokuapp.com/https://example.com
    fetch(proxyurl + url, { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data =>console.log(data));
  }

  render() {
    return (
      <div>
      <h1>Add post</h1>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>< br/>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
        </div>
        <div>
          <label>Body:</label>< br/>
          <textarea name="body" onChange={this.onChange} />
        </div>
        <button type="submit" value={this.state.body}>Submit</button>

      </form>

      </div>
    )
  }
}

export default PostForm;