document.componentRegistry = {};
document.nextId = 0;

export default class Component {
  constructor() {
    this._id = ++document.nextId;
    document.componentRegistry[this._id] = this;
  }

  setState(state, callback = () => {}) {
    this.state = { ...this.state, ...state };
    this.rerender();
    callback();
  }

  componentDidMount() {}

  componentDidUnmount() {}

  rerender() {
    document.querySelector('#app').innerHTML = this.render();
  }

  mount() {
    this.rerender();
    this.componentDidMount();
  }

  unmount() {
    delete document.componentRegistry[this._id];
    document.querySelector('#app').innerHTML = '';
    this.componentDidUnmount();
  }
}
