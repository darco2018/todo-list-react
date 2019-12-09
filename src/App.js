import React from 'react';
/* import uuidv4 from 'uuid/v4' uncomment when working without axios;
 */import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/layout/Header';
import About from './pages/About';
import axios from 'axios';

class App extends React.Component {
  // state cannot be const !
  // boolean without quotes !

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      /*    before adding axios:   todos: TODOS,  */
      todos: [],
      error: null
    };
  }

  // with axios:
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
      .catch(function(error) {
        console.log(error);
      });
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
    if (!this.state.title) return;

    let newToDo = {
      /*  id: uuidv4(),  server will return todo with id*/
      title: this.state.title,
      completed: false
    };

    axios
      .post('https://jsonplaceholder.typicode.com/todos', newToDo)
      .then(res => {
        newToDo = res.data;
        const newTodoList = [...this.state.todos, newToDo];
        this.setState({
          title: '',
          todos: newTodoList
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    //---------------

    /*  ASYNCHRONOUS VERSION
    async function postToDo() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newToDo);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    postToDo(); */

    //---------------------

    /*  without axios:
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
 */
  };

  markComplete = id => {
    //NOTE: we should also update it on the server
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
    // first delete on server then update UI
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        // note the use of filter
        const updatedTodos = this.state.todos.filter(todo => {
          return todo.id !== id;
        });

        this.setState({
          todos: updatedTodos
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    /*  without axios:
     try {
      const updatedTodos = this.state.todos.filter(todo => {
        return todo.id !== id;
      });

      this.setState({
        todos: updatedTodos
      });
    } catch (error) {
      this.setState({ error });
    } */
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
      // note: exact in Route & render={props when more than 1 components
      // in the 2nd Route onlly componenet={About} wich refers to  /about url
      <ErrorBoundary>
        <Router>
          <div className="container">
            <Header />

            <Route
              exact
              path="/"
              render={props => (
                <>
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
                </>
              )}
            />
          </div>

          <Route path="/about" component={About} />
        </Router>
      </ErrorBoundary>
    );
  }
}
/*  Linked to state when working without axios. Also uncomment uuidv4 for id generation
const TODOS = [
  { id: uuidv4(), title: 'Clean the windows', completed: false },
  { id: uuidv4(), title: 'Do the shopping', completed: false },
  { id: uuidv4(), title: 'Walk the dog', completed: false }
];
 */
export default App;
