import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class AdvantagesTypeOne {
  constructor(container, data) {
    this.container = container;
    this.data = data;
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
        <div class="advantages__elem col-md-4">
          <img class="advatages__icon" src="${item.icon}">
          <p class="advatages__text">
            ${item.text}
          </p>
        </div>`,
    );
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      'beforebegin',
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}

