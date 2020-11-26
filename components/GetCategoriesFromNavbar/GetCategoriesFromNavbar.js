import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class GetCategoriesFromNavbar {
  constructor(list, arr, title, container, target) {
    this.list = list;
    this.arr = arr;
    this.title = title;
    this.container = container;
    this.target = target;
  }

  getCategoriesFromNavbar() {
    return this.list.map((item, index) => {
       return {
            img: !this.arr[index] ? 'default' : this.arr[index],
            name: item.firstElementChild.outerHTML
       }
    })
  }

  setTemplate() {
    return `
        <div class="categories__container">
        <h2 class="categories__title">${this.title}</h2>
          ${this.setData().join('')}
        </div>
    `
  }

  setData() {
    return this.getCategoriesFromNavbar().map(
      (item) => `
        <div class="categories__container__item">
        <img src="${item.img}" alt="img"/>
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
