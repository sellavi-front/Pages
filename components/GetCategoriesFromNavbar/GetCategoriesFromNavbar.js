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
  constructor(list) {
    this.list = list;
    /*this.target = target;
    this.container = container;*/
    this.object = {}
  }

  getCategoriesFromNavbar() {
    console.log(this.list)
    return this.list.map(item => {
     this.object = {
          name: item.firstElementChild.innerText,
          link: item.firstElementChild.href
      }
    })
  }

  setTemplate() {
    /*return `
        <div class="categories__container">
          ${this.setData(this.data).join('')}
        </div>
    `*/
    console.log(this.getCategoriesFromNavbar())
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="info-card__item">
          <img src="${item.img}" alt="img" />
          <h4><a href="${item.link}">${item.name}</a></h4>
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
