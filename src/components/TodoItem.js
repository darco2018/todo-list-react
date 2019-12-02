import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  //static propTypes = { }

  render() {
    //console.log(this.props.todo);
    const todo = this.props.todo;
    return <h3>{todo.title}</h3>;
  }
}

export default TodoItem;
