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
    // onsubmit is added to parent
    // value for input is passed down as props - common pattern
    // event triggers delegating event to parent - common pattern - lift state up
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px' }}
            value={this.props.title}
            placeholder="Add new todo"
            onChange={this.onChange}
          />
          <button className="btn" style={{flex: '1'}}>Submit</button>
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
