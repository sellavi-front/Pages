import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const defaultData = [
  {
    src: '../icons/whatsapp.svg',
    link: '#',
  },
  {
    src: '../icons/instagram.svg',
    link: '#',
  },
  {
    src: '../icons/instagram.svg',
    link: '#',
  },
  {
    src: '../icons/facebook.svg',
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
