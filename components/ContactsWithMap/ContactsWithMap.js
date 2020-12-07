import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContactsWithMap {
  constructor(container, target, obj) {
    this.target = target;
    this.container = container;
    this.obj = obj;
    this.contacts = this.obj.contacts;
    this.yaMap = this.obj.map;
    console.log(this.yaMap);
    console.log(this.contacts);
  }

  setTemplate() {
    return `
      <div class="contact-with-map">
        <ul class="contact__list">
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
          <p class="contact__title">
            ${item.title}
          </p>
          <p class="contact__text">
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
