import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      display: 'inline',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    //console.log(this.props.todo);
    const todo = this.props.todo;
    return (
      <div style={{marginBottom: '25px'}}>
        <input type="checkbox" />
        <p style={this.getStyle()}>{todo.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};



export default TodoItem;
