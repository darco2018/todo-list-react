import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export class AddTodo extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add new todo" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
