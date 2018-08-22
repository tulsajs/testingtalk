import TodoApp from './TodoApp';
import { fireEvent, getByText } from 'dom-testing-library';

describe('TodoApp', () => {
  let Todo;
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    Todo = new TodoApp();
    Todo.mount();
  });

  afterEach(() => {
    Todo.unmount();
  });

  it('should set the dom for the #app selector', () => {
    expect(document.querySelector('#input')).toBeDefined;
  });

  it('should have predefined todos', () => {
    expect(document.querySelectorAll('li').length).toBe(2);
  });

  it('should remove a todo', () => {
    fireEvent.click(getByText(document, /Milk/i));
    expect(document.querySelectorAll('li').length).toBe(1);
    expect(getByText(document, /Eggs/i)).toBeTruthy();
  });

  it('should add a todo', () => {
    Todo.addTodo({ keyCode: 13, target: { value: 'Test' } });
    expect(document.querySelectorAll('li').length).toBe(3);
    expect(getByText(document, /Test/i)).toBeTruthy();
  });
});
