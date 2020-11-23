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
        <div class="advantages__container">
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

const d = [
  {
    icon:
      'https://res.cloudinary.com/gz-company/image/upload/v1606138421/Miru/eye-scanner_1_mmtu8g.png',
    text: 'Качество оптики линзы – лидирующее в мире.',
  },
  {
    icon: 'https://res.cloudinary.com/gz-company/image/upload/v1606138444/Miru/view_1_f35d0y.png',
    text: 'Высочайшая устойчивость к дегидратации, т.е. к пересыханию.',
  },
  {
    icon: 'https://res.cloudinary.com/gz-company/image/upload/v1606138421/Miru/eye_1_jo1grj.png',
    text: 'Пластичный материал обеспечивает сниженный коэффициент трения.',
  },
];

const clasess = new AdvantagesTypeOne(document.querySelector('.page-section'), d);

clasess.render();
