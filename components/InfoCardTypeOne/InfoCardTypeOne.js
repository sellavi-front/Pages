import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContentBannerTypeOne {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="container">
        <div class="info-card">
          <h2 class="info-card__title">Акции</h2>
          ${this.setData(this.data).join('')}
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="info-card__item">
          <img class="info-card__item_img" src="${item.img}">
          <div class="item-card__bottom">
            <p class="item-card__bottom_text">
              <storng>${item.textTitle}</strong>${item.text}
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
