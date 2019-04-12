import React, { Component } from 'react';
import CommentsListContainer from './CommentsListContainer';
import FormContainer from './FormContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1> The comments app </h1>
      <h2> The comments list</h2>
      <CommentsListContainer />
      <h2>Write your comment here</h2>
      <FormContainer />
    </div>
  );
};

export default App;
