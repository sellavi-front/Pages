import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContactsTypeOne {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
        <div class="contacts">
          <div class="container">
          <div class="contacts__container">
            ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="contacts__item">
          <img class="contacts__item_ico" src="${item.icon}">
          <a href="${item.link}" class="contacts__item_text">${item.text}</a>
        </div>
      `,
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
