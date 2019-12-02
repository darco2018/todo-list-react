import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

// app must extend compnenet !!!
class App extends React.Component {
  // state cannot have const !
  // boolean without quotes !
  state = {
    todos: [
      {
        id: '1',
        title: 'Walk the dog',
        completed: false
      },
      {
        id: '2',
        title: 'Get the parcel',
        completed: false
      },
      {
        id: '3',
        title: 'Go to the bank',
        completed: true
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
