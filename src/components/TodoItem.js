import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { maxHeaderSize } from 'http';

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
    // REmember to bind(this, id) when passing a value!!! 
    //console.log(this.props.todo);
    const { id, title } = this.props.todo;
    return (
      <div style={{ marginBottom: '25px' }}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        <p style={this.getStyle()}>{title}</p>
        <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
      </div>
    );
  }
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: "#fff",
    border: 'none',
    borderRadius: '50%',    
    padding: '5px 9px',
    marginRight: '20px',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default TodoItem;
