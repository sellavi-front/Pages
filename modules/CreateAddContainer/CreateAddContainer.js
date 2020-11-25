export default class CreateAddContainer {
  constructor(container, target, elem) {
    this.container = container;
    this.target = target;
    this.elem = elem;
  }

  render() {
    this.container.insertAdjacentHTML(this.target, this.elem);
  }
}
