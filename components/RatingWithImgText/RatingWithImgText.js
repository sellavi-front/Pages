import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class RatingWithImgText {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="rating__container">
            ${this.setData(this.data).join('')}
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="rating__container__item__column">
          <img class="rating__item_img" src="${item.img}" alt="img">
          <p class="about__item_title">${item.title}</p>
          <img class="rating__item_stars" src="${item.stars}" alt="img">
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
