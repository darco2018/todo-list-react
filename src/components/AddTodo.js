import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  /* state = {
    newTodoInput: ''
  }; */

  onChange = e => {
      // delegate to parent
    this.props.handleInputChange(e);
  };

  onSubmit = e => {
  // delegate to parent
  e.preventDefault(); // without it, any console.log below  only flashes momentarily   
    this.props.addTodo();
  };

  render() {
    return (
      <div style={addTodoStyle}>
        {/* onSubmit must be on form, not on input */}
        <form onSubmit={this.onSubmit}>
          Add todo{' '}
          <input
            style={{ height: '30px', width: '', fontSize: '16px' }}
            type="text"
            name="newTodoInput"
            value={this.props.newTodoInput}
            onChange={this.onChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

const addTodoStyle = {
  margin: '30px 5px'
};

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
