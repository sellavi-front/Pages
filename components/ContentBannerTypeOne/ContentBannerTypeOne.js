import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContentBannerTypeOne {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="banner-content">
        ${this.setData(this.data).join('')}
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="banner-content__item">
          <div class="banner-content__item_bg">
            <img class="banner-content__item_img" src="${item.banner}">
          </div>
          <div class="container">
            <div class="banner-content__container">
              <h3 class="banner-content__item_title">${item.title}</h3>
              <p class="banner-content__item_text">${item.text}</p>
              <a href="${item.linkSrc}" class="banner-content__item_button">
                <span>${item.linkContent}</span>
              </a>
            </div>
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
