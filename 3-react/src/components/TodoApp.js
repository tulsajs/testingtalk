import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoInput from './TodoInput';
import uuidv4 from 'uuidv4';
import { BaseContainer } from './Styled';

export default class TodoApp extends Component {
  state = {
    todos: [
      { id: uuidv4(), name: 'Pick up the milk and eggs from the store', done: true },
      { id: uuidv4(), name: 'Buy Spiderman for ps4', done: false },
      { id: uuidv4(), name: 'Take a vacation', done: false },
      { id: uuidv4(), name: 'Visit the ocean', done: false },
      { id: uuidv4(), name: 'Give a talk about testing at TulsaJS', done: false }
    ],
    filter: 'all'
  };

  onToggleComplete = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map(todo => {
          if (id === todo.id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        })
      };
    });
  };

  onDeleteTodo = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(todo => todo.id !== id)
      };
    });
  };

  onAddTodo = name => {
    this.setState(({ todos }) => {
      return {
        todos: [{ id: uuidv4(), name, done: false }, ...todos]
      };
    });
  };

  onFilterUpdate = filter => {
    this.setState({ filter });
  };

  get filterTodos() {
    const { todos, filter } = this.state;
    let filteredTodos;
    switch (filter) {
      case 'all':
        filteredTodos = todos;
        break;
      case 'active':
        filteredTodos = todos.filter(todo => !todo.done);
        break;
      case 'done':
        filteredTodos = todos.filter(todo => todo.done);
        break;
      default:
        filteredTodos = todos;
        break;
    }
    return filteredTodos;
  }

  render() {
    return (
      <BaseContainer>
        <TodoInput onAddTodo={this.onAddTodo} />
        <TodoList
          todos={this.filterTodos}
          onToggleComplete={this.onToggleComplete}
          onDeleteTodo={this.onDeleteTodo}
        />
        <TodoFilter filter={this.state.filter} onFilterUpdate={this.onFilterUpdate} />
      </BaseContainer>
    );
  }
}
