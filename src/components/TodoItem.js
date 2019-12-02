import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    //console.log(this.props.todo);
    const todo = this.props.todo;
    return <h3>{todo.title}</h3>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
