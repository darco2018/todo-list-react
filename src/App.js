import React from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  // state cannot be const !
  // boolean without quotes !

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: TODOS,
      error: null
    };
  }

  // ErrorBoundary doesnt work with event handlers,
  // so use try/catch
  updateInput = e => {
    try {
      this.setState({
        title: e.target.value
        //array of multiple key/value pairs: [e.target.name]: [e.target.value]
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  addTodo = () => {
    try {
      if (!this.state.title) return;

      const newToDo = {
        id: uuidv4(),
        title: this.state.title,
        completed: false
      };

      const newTodoList = [...this.state.todos, newToDo];

      this.setState({
        title: '',
        todos: newTodoList
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  markComplete = id => {
    try {
      const updatedTodos = this.state.todos.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
      this.setState({
        todos: updatedTodos
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteTodo = id => {
    try {
      const updatedTodos = this.state.todos.filter(todo => {
        return todo.id !== id;
      });

      this.setState({
        todos: updatedTodos
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    // handles errors from try/catch blocks
    if (this.state.error) {
      console.log(this.state.error);
      return (
        <div>
          <h1>Ooops...Something went wrong.</h1>
        </div>
      );
    }

    return (
      // see notes in ErrorBoundary file
      <ErrorBoundary>
        <div className="container">
          <h1>Todos</h1>

          <AddTodo
            title={this.state.title}
            updateInput={this.updateInput}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
          />

          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

const TODOS = [
  { id: uuidv4(), title: 'Clean the windows', completed: false },
  { id: uuidv4(), title: 'Do the shopping', completed: false },
  { id: uuidv4(), title: 'Walk the dog', completed: false }
];

export default App;
