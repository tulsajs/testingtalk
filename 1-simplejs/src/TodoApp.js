import uuidv4 from 'uuidv4';

export default class TodoApp {
  state = {
    todos: [{ id: uuidv4(), name: 'Milk' }, { id: uuidv4(), name: 'Eggs' }]
  };

  setState(state, callback = () => {}) {
    this.state = { ...this.state, ...state };
  }

  addTodo(name) {
    this.setState({
      todos: [...this.state.todos, { id: uuidv4(), name: name }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
}
