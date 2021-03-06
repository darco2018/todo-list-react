import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getItemStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { title, id } = this.props.todo;
    // will be caught by ErrorBoundary from Todolist & display: This todo cannot be displayed!
    if (title === '') {
      throw new Error();
    }
    // note we pass the id from the TodoList but we could've put 
    // onChange={()=>this.markComplete(todo.id)} in the parent instead, so as not to pass the id
    // & here just have this.props.markComplete
    return (
      <div style={this.getItemStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {' '}
          {title}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
    // note how button with X is styled
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 9px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
