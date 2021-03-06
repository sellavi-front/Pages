import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class AdvantagesTypeTwo {
  constructor(container, data, target = 'beforebegin') {
    this.container = container;
    this.data = data;
    this.target = target;
  }

  setTemplate() {
    return `
    <div class="container">
      <div class="advantages">
        ${this.setData().join('')}
      </div>
    </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="advantages__elem">
          <img class="advantages__icon" src="${item.icon}">
          <p class="advantages__text">
            ${item.text}
          </p>
        </div>`,
    );
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}