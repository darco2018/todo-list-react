import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodoList extends Component {
  
  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map( (todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;
