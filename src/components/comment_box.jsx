import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

class CommentBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      comment: ''
    };
  }

  handleChange = e => {
    this.setState({
      comment: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='comment-box'>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
          cols="30"
          rows="10">
        </textarea>
        <button type='submit'>Submit comment</button>
      </form>
    )
  }
}

export default connect(null, {saveComment})(CommentBox);