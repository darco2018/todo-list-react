import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      // each todo willl have a separate ErrorBoundary defined below.
      // If you want to trigger error, set one of the todo's title to ''
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
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false
      };
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
    render() {
      if (this.state.hasError) {
        return <span style={{color: 'red'}}>This todo cannot be displayed!</span>;
      }
      return this.props.children;
    }
  }

export default TodoList;
