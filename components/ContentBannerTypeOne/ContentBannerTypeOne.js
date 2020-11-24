import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContentBannerTypeOne {
  constructor(container, data) {
    this.data = data;
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
          <img class="banner-content__item_img" src="${item.banner}">
          <div class="banner-content__container container">
            <h3 class="banner-content__item_title">${item.title}</h3>
            <p class="banner-content__item_text">${item.text}</p>
            <a href="${item.linkSrc}" class="banner-content__item_button">
              <span>${item.linkContent}</span>
            </a>
          </div>
        </div>
      `,
    );
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      'afterEnd',
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}
