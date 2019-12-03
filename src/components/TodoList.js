import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
          />
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

export default TodoList;
