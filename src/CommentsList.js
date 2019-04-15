import React from 'react';
import Comment from './CommentContainer';
import './CommentsList.css';

const CommentsList = ({ comments }) => <ul className="CommentsList">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

export default CommentsList;