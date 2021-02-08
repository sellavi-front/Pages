import categories from "./categories.js"

export default class Categories  {
  constructor() {
      this.props = props;
  }

  setTemplate() {
      return this.props.map(el => {
        return `
          <div class="categories__item">
            <a href="${el.link}">
              <img src="${el.img}" alt="category">
              <p>${el.text}</p>
            </a>
          </div>
        `
      })
  }

  render() {
    return `
    <div class="container">
      <h3 class="categories-title">Категории</h3>
      <div class="categories__container">
        ${this.setTemplate()}
      </div>
    </div>
    `
  }
}

let renderCategories = () => {
  document.querySelector(".custom_section").insertAdjacentHTML("afterbegin", new Categories(categories).render())
}

export default renderCategories