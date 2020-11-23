export default class CreateAddContainer {
  constructor(container, target, elem) {
    this.target = target;
    this.container = container;
    this.elem = elem;
  }

  render() {
    console.log(this.container);
    this.container.inserAdjacentHTML(this.target, this.elem);
  }
}
