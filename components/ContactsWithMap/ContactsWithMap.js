import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContactsWithMap {
  constructor(container, target, obj) {
    this.target = target;
    this.container = container;
    this.obj = obj;
    this.contacts = this.obj.contacts;
    this.yaMap = this.obj.yaMap;
    console.log(this.obj);
  }

  setTemplate() {
    return `
      <div class="contact-with-map">
      <ul class="contact__list">
          ${this.setData()}
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
          ${item.title}
          ${item.contact}
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

const data = {
  contacts: [
    {
      title: 'Адрес',
      contact: 'г. Москва',
    },
    {
      title: 'Телефон',
      contact: '+7(926)367-97-77',
    },
    {
      title: 'E-mail',
      contact: 'magazin1170@mail.ru	',
    },
  ],
  map: `
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ace6b1a8aa5dbad763aca6289fa9858ead326365147735f99a5869dcddb66f547&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
  `,
};

const cont = document.querySelector('.custom_section')

const map = new ContactsWithMap(cont, 'beforeend', data);
