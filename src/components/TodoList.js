import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoList extends Component {
  //static propTypes = {};

  render() {
    const todos = this.props.todos;
    //console.log(this.props.todos);
    return (
      <>
        {todos.map(todo => (
          <h3 key={todo.id}>{todo.title}</h3>
        ))}
      </>
    );
  }
}

export default TodoList;
