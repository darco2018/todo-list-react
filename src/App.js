import React from 'react';
import uuidv4 from 'uuid/v4';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'



class App extends React.Component {
  // state cannot have const !
  // boolean without quotes !

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todos</h1>
          <AddTodo />
          <TodoList todos={TODOS}/>
        </div>
      </div>
    );
  }
}


const TODOS = [
  { id: uuidv4(), title: 'Clean the windows', completed: false },
  { id: uuidv4(), title: 'Do the shopping', completed: false },
  { id: uuidv4(), title: 'Walk the dog', completed: false }
];

export default App;
