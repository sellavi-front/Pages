import categories from "./categories.js"

class Categories  {
  constructor(props) {
      this.props = props;
  }

  setTemplate() {
      return this.props.map(el => {
        return `
          <div class="col-xl-3 col-lg-4 col-md-6 col-12">
            <a href="${el.link}">
              <img src="${el.img}" alt="category" class="mb-3 w-100">
              <p class="text-center">${el.text}</p>
            </a>
          </div>
        `
      }).join('')
  }

  render() {
    return `
    <div class="container">
      <h3 class="categories-title">Основные категории</h3>
      <div class="row">
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