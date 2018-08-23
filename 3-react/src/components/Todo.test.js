import React from 'react';
import { mount } from 'enzyme';
import Todo from './Todo';
import { CloseIcon, Item } from './Styled';

describe('Todo component', () => {
  it('rendered todo should show name of todo', () => {
    const container = mount(<Todo todo={{ id: 'blah', name: 'Milk', done: false }} />);
    expect(container.find('span').text()).toBe('Milk');
  });

  it('when done false todo should be unchecked', () => {
    const container = mount(<Todo todo={{ id: 'blah', name: 'Milk', done: false }} />);
    expect(container.find('input').props().checked).toBe(false);
  });

  it('when done true todo should be checked', () => {
    const container = mount(<Todo todo={{ id: 'blah', name: 'Milk', done: true }} />);
    expect(container.find('input').props().checked).toBe(true);
  });

  it('rendered todo should show a delete icon', () => {
    const container = mount(<Todo todo={{ id: 'blah', name: 'Milk', done: false }} />);
    expect(container.find(CloseIcon).length).toBe(1);
  });
});
