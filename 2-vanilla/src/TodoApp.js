import Component from './Component';
import uuidv4 from 'uuidv4';

export default class TodoApp extends Component {
  state = {
    todos: [{ id: uuidv4(), name: 'Milk' }, { id: uuidv4(), name: 'Eggs' }]
  };

  addTodo(e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code !== 13) return;
    this.setState({
      todos: [...this.state.todos, { id: uuidv4(), name: e.target.value }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  get comp() {
    return `document.componentRegistry[${this._id}]`;
  }

  render() {
    const {
      comp,
      state: { todos }
    } = this;

    return `
    <input type="text" id="input" onkeyup="${comp}.addTodo(event)">
    <ul>${todos
      .map(
        ({ name, id }) =>
          `<li style="cursor: pointer;" onclick="${comp}.removeTodo('${id}')">${name}</li>`
      )
      .join('')}</ul>
    `;
  }
}
