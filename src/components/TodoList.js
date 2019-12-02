import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {

  

  render() {
    const todos = this.props.todos;
    //console.log(this.props.todos);
    return (
      <>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} 
          markComplete={this.props.markComplete}
            delTodo={this.props.delTodo} />
        ))}
      </>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
