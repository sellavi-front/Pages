import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class ContentBannerTypeOne {
  constructor(container) {
    this.data = data;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="banner-content">
        <div class="container">
          ${this.setData(this.data).join('')}
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="banner-content__item">
          <h3 class="banner-content__item_title">${item.title}</h3>
          <p class="banner-content__item_text">${item.text}</p>
          <a href="${item.buttonLink}"c lass="banner-content__item_button">${item.linkContent}</a>
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