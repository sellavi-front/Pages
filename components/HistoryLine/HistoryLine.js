import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class HistoryLine {
  constructor(container, target, data) {
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
        <div class="history">
          <div class="container">
          <h2 class="history__title">Акции</h2>
          <div class="history__container">
            ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="history__item">
          <p class="history__item_date">${item.date}</p>
          <img class="history__item_line" src="${item.line}">
          <img class="history__item_img" src="${item.img}">
          <div class="history__item_text">
            <p class="history__item_text_title">${item.title}</p>
            <p class="history__item_text_text">${item.text}</p>
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
