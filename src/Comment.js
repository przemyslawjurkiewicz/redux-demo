import React from 'react';

export const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment }) =>
    <li>
        {text}
        <span> votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>ThumbUp</button>
        <button onClick={() => thumbDownComment(id)}>ThumbDown</button>
        <button onClick={() => removeComment(id)}>Remove</button>
        <button onClick={() => editComment(id, text)}>Edit</button>
    </li>;

export default Comment;