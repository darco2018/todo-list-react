import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  static propTypes = {};

  render() {
    return <div style={addTodoStyle}>
        Add todo {' '}
        <input style={{ height: '30px', width: ''}} type="text" />
    </div>;
  }
}

const addTodoStyle = {   
    margin: '30px 5px'
}

export default AddTodo;
