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

  markComplete = id => {
    const todosCopy = this.state.todos.map(todo => {
      if (todo.id === id) {
        const completed = !todo.completed;
        //return Object.assign({}, todo); this works too
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({
      todos: todosCopy
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
