import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    //console.log(this.props.todo);
    const todo = this.props.todo;
    return (
      <>
        {/* <input type="checkbox" /> */}
        <p style={this.getStyle()}>{todo.title}</p>
      </>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
