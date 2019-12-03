import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

   getItemStyle = () =>{
    return {
        display: 'inline',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
   } 

  render() {
    const { title, id } = this.props.todo;

    return (
      <div className="todoItem" style={itemBarStyle}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        <p style={this.getItemStyle()}>{title}</p>
        <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const itemBarStyle = { textAlign: 'left', margin: '10px 130px' };

export default TodoItem;
