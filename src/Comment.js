import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Comment.css';

export const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment }) =>
    <li className="Comment">
        {text}
        <span className="votes"> votes: {votes}</span>
        <div className="comment-menu">
        <button onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon="thumbs-up" /></button>
        <button onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon="thumbs-down" /></button>
        <button onClick={() => removeComment(id)}><FontAwesomeIcon icon="trash" /></button>
        <button onClick={() => editComment(id, text)}><FontAwesomeIcon icon="edit" /></button>
        </div>
    </li>;

export default Comment;