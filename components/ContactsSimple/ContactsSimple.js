export default class ContactsSimple {
  constructor(contacts, container) {
    this.contacts = contacts;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="contacts-simple">
        <h2 class="contacts-simple__title"> ${this.contacts.title}</h2>
        <ul class="contacts-simple__list">
          <li class="contacts-simple__list_elem">
            <a href="phone:${this.contacts.phone}" class="">${this.contacts.phone}</a>
          </li>
          <li class="contacts-simple__list_elem">
            <a href="${this.contacts.email}" class="">${this.contacts.email}</a>
          </li>
        </ul>
      </div>
    `;
  }

  render() {
    this.container.insertAdjacentHTML('beforeend', this.setTemplate());
  }
}