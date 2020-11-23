export default class CreateAddContainer {
  constructor(container, target, elem) {
    this.container = container;
    this.target = target;
    this.elem = elem;
  }

  render() {
    console.log(this.container, this.target, this.elem);
    this.container.inserAdjacentHTML(this.target, this.elem);
  }
}
