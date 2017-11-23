import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        {/* input */}
        <form>
          <input type="text" placeholder="What do I need to do?" />
          <button> Create </button>
        </form>


        {/* table */}
        <table>

          {/* TodoListHeader */}
          <thead>
            <th> Task </th>
            <th> Action </th>
          </thead>

          <tbody>

            {/* TodoListItem 1 */}
            <tr>
              <td style={{color: 'green'}}>
                washing a car
                </td>
              <td>
                <button> SAVE </button>
                <button> Cancel </button>
              </td>
            </tr>

            {/* TodoListItem 2 */}
            <tr>
              <td style={{color: 'red'}}>
                กินข้าว
                </td>
              <td>
                <button> SAVE </button>
                <button> Cancel </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
