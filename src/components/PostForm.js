import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';




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

      //we replace our fetch with this line cause now the fetch is 
      // inside of the action file
      this.props.createPost(post)
    }
  

    //Call Action

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