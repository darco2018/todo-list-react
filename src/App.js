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
        // always return a new object        
        return { ...todo, completed: !todo.completed };
        //return Object.assign({}, todo); this works too
      }
      return todo;
    });

    this.setState({
      todos: todosCopy
    });
  };

  delTodo = id => {    
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
