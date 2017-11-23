import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoListContainer from './containers/TodoListContainer'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1> React Todo App</h1>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
