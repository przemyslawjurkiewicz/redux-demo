import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import FormContainer from './FormContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faThumbsUp, faThumbsDown, faTrash, faEdit)

const App = () => {
  return (
    <div className="App">
      <h1> The comments app.</h1>
      <h2> The comments list:</h2>
      <CommentsListContainer />
      <h2>Write your comment here:</h2>
      <FormContainer />
    </div>
  );
};

export default App;
