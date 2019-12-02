import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
  //static propTypes = {};

  render() {
    const todos = this.props.todos;
    //console.log(this.props.todos);
    return (
      <>
        {todos.map(todo => (         
          <TodoItem todo={todo} />
        ))}
      </>
    );
  }
}

export default TodoList;
