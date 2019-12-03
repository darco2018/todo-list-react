import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

// app must extend compnenet !!!
class App extends React.Component {
  // state cannot have const !
  // boolean without quotes !
  state = {
    newTodoInput: '',
    todos: [
      {
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Get the parcel',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to the bank',
        completed: true
      }
    ]
  };

  handleInputChange = e => {
    // delegate to parent
    this.setState({
      //same as todoInput: e.target.value
      [e.target.name]: [e.target.value]
    });
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

  addTodo = () => {    
            
    const newTodo = {
      id: uuid.v4(),
      title: this.state.newTodoInput,
      completed: false
    };

    const newTodos = [...this.state.todos, newTodo];
    // clear input field
    this.setState({
      newTodoInput: '',
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo List</h1>
          <AddTodo
            addTodo={this.addTodo}
            newTodoInput={this.state.newTodoInput}
            handleInputChange={this.handleInputChange}
          />
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
