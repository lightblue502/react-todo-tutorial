import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


class App extends Component {
  render() {
    return (
      <div>
        {/* input */}
        <TodoCreate />

        {/* table */}
        <TodoList/>
      </div>
    );
  }
}

export default App;
