import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    todoInput: ''
  };

  onChange = e => {
    this.setState({
      //same as todoInput: e.target.value
      [e.target.name]: [e.target.value]
    });
  };

  onSubmit = e => {
    e.preventDefault(); // without it, console.log in next line appears only momentarily
    console.log('onsubmit 1');
    // delegate input value to parent
    console.log('Val is ' + this.state.todoInput);

    this.props.addTodo(this.state.todoInput);
    // clear input field
    this.setState({ todoInput: '' });
  };

  render() {
    return (
      <div style={addTodoStyle}>
        {/*         onSubmit must be on form, not on input
         */}
        <form onSubmit={this.onSubmit}>
          Add todo{' '}
          <input
            style={{ height: '30px', width: '', fontSize: '16px' }}
            type="text"
            name="todoInput"
            value={this.state.inputVal}
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
  /*     updateInput : PropTypes.func.isRequired,
   */

  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
