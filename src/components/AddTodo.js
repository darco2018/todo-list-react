import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  onChange = e => {
    // delegate to parent
    this.props.updateInput(e);
  };

  onSubmit = e => {
    e.preventDefault();
    // delegate to parent
    this.props.addTodo(e);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            value={this.props.title}
            placeholder="Add new todo"
            onChange={this.onChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  title: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
