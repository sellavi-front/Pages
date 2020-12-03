import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContentBannerTypeOne {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
        <div class="info-card">
          <div class="container">
          <h2 class="info-card__title">Акции</h2>
          <div class="info-card__container">

          ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="info-card__item">
          <a href="${item.link}">
            <img class="info-card__item_img" src="${item.img}">
          </a>
          <div class="info-card__bottom">
            <a href="${item.link}">
              <p class="info-card__bottom_text">
                <span>${item.textTitle}</span><p>${item.text}</p>
              </p>
            </a>
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
