# Todo List with React & JSONplaceholder

> Add new todos. Mark them as completed or remove completely...

### Features

- React
- React Router, ErrorBoundary
- Axios to fetch mock data from REST API (https://jsonplaceholder.typicode.com)
- Uuid to generate mock ids

### Notes on using ErrorBoundary

- see ErrorBoudary.js

### Useful code snippets

```sh
axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
      .catch(function(error) {
        console.log(error);
      })
```

```sh
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
```

```sh
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

   return (//...)
```

```sh
<div>
       {todos.map(todo => (
         <ErrorBoundary key={todo.id}>
           <TodoItem
             key={todo.id}
             todo={todo}
             markComplete={this.props.markComplete}
             deleteTodo={this.props.deleteTodo}
           />
         </ErrorBoundary>
       ))}
</div>
```

```sh
<input type="checkbox"  onChange={this.props.markComplete.bind(this, id)} />
```