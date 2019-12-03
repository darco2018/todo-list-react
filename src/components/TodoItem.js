import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  
  render() {
    const { title } = this.props.todo;

    return (
      <div className="todoItem" style={itemBar}>
        <input type="checkbox" />
        <p style={itemText}>{title}</p> <button>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemBar = { textAlign: 'left', margin: '10px 130px' };
const itemText = { display: 'inline' }

export default TodoItem;
