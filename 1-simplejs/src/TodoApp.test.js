import TodoApp from './TodoApp';

const expect = (firstVar, secondVar) => {
  if (firstVar === secondVar) return true;
  throw new Error('failed spec');
};

describe('TodoApp', () => {
  let Todo;
  beforeEach(() => {
    Todo = new TodoApp();
  });
  afterEach(() => {
    Todo = null;
  });

  it('should have predefined todos', () => {
    expect(Todo.state.todos.length, 2);
  });

  it('should remove a todo', () => {
    Todo.removeTodo(Todo.state.todos[0].id);
    expect(Todo.state.todos.length, 1);
  });

  it('should add a todo', () => {
    Todo.addTodo('testing');
    expect(Todo.state.todos.length, 3);
  });
});
