import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ImgNearText {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="about">
        <div class="container">
          <div class="about__container">
            ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="about__item">
          <img class="about__item_img" src="${item.img}">
          <div class="about__item-container">
            <h2 class="about__item_title">${item.title}</h2>
            <p class="about__item_text">
              ${item.ph1}
            </p>
            <p class="about__item_text">
              ${item.ph2}
            </p>
          </div>
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
