import BaseComponent from '../../../../components/BaseComponent/BaseComponent.js';

export default class Category extends BaseComponent {
  constructor(props, data) {
    super(props);
    this.data = data;
  }

  getData() {
    return this.data.content
      .map((elem) => {
        return `
          <div class="icon-category__elem">
            <img class="icon-category__elem_ico" src="${elem.src}" alt="иконка категории">
            <a class="icon-category__elem_link" href="${elem.link}">
              ${elem.text}
            </a>
          </div>
      `;
      })
  }

  getTemplate() {
    return `
    <div class="icon-category">
      ${this.data.title ? `<h3 class="icon-category__title">${this.data.title}</h3>` : ''}
      <div class="icon-category__container">
        ${this.getData().join('')}
      </div>
    </div>`;
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}
