import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({comments}) => {
  if(!comments || comments.length === 0) {
    return (<div className='comment-list placeholder'>No comments added</div>)
  }
  return (
    <ul className='comment-list'>
      {comments.map((comment, index) => (<li key={index}>{comment}</li>))}   
    </ul>
  )
};

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList);

// 
