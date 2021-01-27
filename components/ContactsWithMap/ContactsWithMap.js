import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContactsWithMap {
  constructor(container, target, obj) {
    this.target = target;
    this.container = container;
    this.obj = obj;
    this.contacts = this.obj.contacts;
    this.yaMap = this.obj.map;
    this.title = this.obj.title;
  }

  setTemplate() {
    return `
      <div class="contact-with-map">
        <ul class="contact__list">
          <li class="contact__title">${this.title}</li>
          ${this.setData().join('')}
        </ul>
        <div class="contact__map">
        ${this.yaMap}
        </div>
      </div>
    `;
  }

  setData() {
    return this.contacts.map(
      (item) => `
        <li class="contact__list-el">
          <p class="contact__list-title">
            ${item.title}
          </p>
          <p class="contact__list-text">
            ${item.contact}
          </p>
        </li>
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
