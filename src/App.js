import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

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
    });
  };

  addTodo = title => {
    const newTodo = {
      id: '4',
      title, // same name for value
      completed: false
    };

    const newTodoList = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodoList
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo List</h1>
          <AddTodo addTodo={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
