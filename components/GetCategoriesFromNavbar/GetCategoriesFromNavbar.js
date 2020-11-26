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
  constructor(list, title, container, target) {
    this.list = list;
    this.title = title;
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
        <div class="categories__title">${this.title}</div>
          ${this.setData().join('')}
        </div>
    `
  }

  setData() {
    return this.getCategoriesFromNavbar().map(
      (item) => `
        <div class="categories__container__item">
          ${item.name}
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
