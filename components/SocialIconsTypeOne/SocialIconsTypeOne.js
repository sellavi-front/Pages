import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const defaultData = [
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-whatsapp_1_kh2mdl.svg',
    link: '#',
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-instagram_1_rw7nv3.svg',
    link: '#',
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-telegram-app_1_blrn1i.svg',
    link: '#',
  },
  {
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-facebook-f_1_uusaiq.svg',
    link: '#',
  },
];

export default class SocialIconsTypeOne {
  constructor(container, target, data = null || undefined) {
    this.target = target;
    this.container = container;
    this.data = !data ? defaultData : data;
  }

  setTemplate() {
    return `
        <div class="social-icons">
          <div class="container">
            <div class="social-icons__container">
              ${this.setData(this.data).join('')}
            </div>
          </div>
        </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="social-icons__item">
          <a href="${item.link}">
            <img class="social-icons__item_icon" src="${item.src}">
          </a>
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
