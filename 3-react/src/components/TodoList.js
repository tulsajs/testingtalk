import React, { Component } from 'react';
import Todo from './Todo';
import { Ul } from './Styled';

export default class TodoList extends Component {
  render() {
    const { todos, onToggleComplete, onDeleteTodo } = this.props;
    return (
      <Ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </Ul>
    );
  }
}
