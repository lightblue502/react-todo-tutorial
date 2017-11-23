import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


const todos = [
  {
      task: 'make React tutorial',
      isCompleted: false
  },
  {
      task: 'eat dinner',
      isCompleted: true
  }
];
  

class App extends Component {
  

  state = {
    todos
  }

  render() {
    return (
      <div>
        {/* input */}
        <TodoCreate todos={this.state.todos}/>
        
        {/* table */}
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
