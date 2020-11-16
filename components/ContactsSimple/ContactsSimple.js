export default class ContactsSimple {
  constructor(contacts, container) {
    this.contacts = contacts;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="contacts-simple container">
        <h2 class="contacts-simple__title"> ${this.contacts.title}</h2>
        <ul class="contacts-simple__list">
          <li class="contacts-simple__list_elem">
            <a class="">${contacts.phone}</a>
          </li>
          <li class="contacts-simple__list_elem">
            <a class="">${contacts.email}</a>
          </li>
        </ul>
      </div>
    `;
  }

  render() {
    this.container.inserAdjacentHTML('beforeend', this.setTemplate());
  }
}