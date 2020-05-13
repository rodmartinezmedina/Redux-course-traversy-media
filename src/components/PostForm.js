import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
  super(props);
  this.state = {};
  }
  render() {
    return (
      <div>
      <h1>Add post</h1>
      <form>
        <div>
          <label>Title: </label>< br/>
          <input type="text" name="title"/>
        </div>
        <div>
          <label>Body:</label>< br/>
          <textarea name="body" />
        </div>
        <button type="submit">Submit</button>

      </form>

      </div>
    )
  }
}

export default PostForm;