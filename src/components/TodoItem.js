import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    // REmember to bind(this, id)!!! or use arrow function above
    //console.log(this.props.todo);
    const { id, title } = this.props.todo;
    return (
      <div style={{ marginBottom: '25px' }}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        <p style={this.getStyle()}>{title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
