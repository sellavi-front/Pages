import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

/*function GetCategoriesFromNavbar() {
  let result = []
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  nodeList.forEach((item, index) => {
    result[index] = {
      name: item.firstElementChild.innerText,
      link: item.firstElementChild.href
    }
  })
  return result
}*/


export default class GetCategoriesFromNavbar {
  constructor(list, container, target) {
    this.list = list;
    this.container = container;
    this.target = target;
  }

  getCategoriesFromNavbar() {
    return this.list.map(item => {
     return {
          name: item.firstElementChild.outerHTML
      }
    })
  }

  setTemplate() {
    return `
        <div class="categories__container">
          ${this.setData().join('')}
        </div>
    `
  }

  setData() {
    return this.getCategoriesFromNavbar().map(
      (item) => `
        <div class="categories__container__item">
          ${item.name.setAttribute("class", "category__name")}
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
