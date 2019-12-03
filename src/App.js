import React from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  // state cannot be const !
  // boolean without quotes !

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: TODOS
    };
  }

  updateInput = e => {
    this.setState({
      title: e.target.value
      //array of multiple key/value pairs: [e.target.name]: [e.target.value]
    });
  };

  addTodo = () => {
    const newToDo = { id: uuidv4(), title: this.state.title, completed: false };
    const newTodoList = [...this.state.todos, newToDo];
    this.setState({
      title: '',
      todos: newTodoList
    });
  };

  markComplete = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        return Object.assign({}, todo, {completed: !todo.completed})
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    })
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todos</h1>
          <AddTodo
            title={this.state.title}
            updateInput={this.updateInput}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoList todos={this.state.todos} 
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

const TODOS = [
  { id: uuidv4(), title: 'Clean the windows', completed: false },
  { id: uuidv4(), title: 'Do the shopping', completed: true },
  { id: uuidv4(), title: 'Walk the dog', completed: true }
];

export default App;
