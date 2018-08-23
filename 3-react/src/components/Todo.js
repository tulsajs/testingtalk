import React, { PureComponent } from 'react';
import { Item, Checkbox, Label, CloseIcon } from './Styled';

export default class Todo extends PureComponent {
  render() {
    const { todo, onToggleComplete, onDeleteTodo } = this.props;
    return (
      <Item>
        <Checkbox
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleComplete(todo.id)}
        />
        <Label>{todo.name}</Label>
        <CloseIcon onClick={() => onDeleteTodo(todo.id)} />
      </Item>
    );
  }
}
