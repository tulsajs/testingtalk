import React, { Component } from 'react';
import { Input } from './Styled';

export default class TodoInput extends Component {
  onKeyUp = e => {
    const { onAddTodo } = this.props;

    if (e.key === 'Enter') {
      onAddTodo(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return <Input type="text" onKeyUp={this.onKeyUp} placeholder="Enter Todo" />;
  }
}
