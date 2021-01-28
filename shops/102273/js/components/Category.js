import BaseComponent from '../../../../components/BaseComponent/BaseComponent.js'

export default class Category extends BaseComponent {
  constructor(props, data) {
    super(props);
    this.data = data;
  }

  getData() {
    return this.data.map(elem => {
      return `
          <div class="icon-category__elem">
            <img class="icon-category__elem_ico" src="${elem.src}" alt="иконка категории">
            <a class="icon-category__elem_link" href="${elem.link}">
              ${elem.text}
            </a>
          </div>
      `
    })
  }

  getTemplate() {
    return `
    <div class="icon-category">
      ${this.getData()}
    </div>`
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}