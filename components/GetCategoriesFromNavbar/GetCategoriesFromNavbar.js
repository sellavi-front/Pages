import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js'

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
            name: item.firstElementChild.outerHTML,
            link: item.firstElementChild.href
       }
    })
  }

  setTemplate() {
    return `
        <div class="categories__container">
            <h2 class="categories__title">${this.title}</h2>
                <div class="categories__row container">
                    ${this.setData().join('')}
                </div>
        </div>
    `
  }

  setData() {
    return this.getCategoriesFromNavbar().map(
      (item) => `
        <div class="categories__container__item_column" onclick="location.href='${item.link}'">
            <div class="column__item_img"><img src="${item.img}" alt="img"/></div>
            <h6>${item.name}</h6>
        </div>
      `
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
