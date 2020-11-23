export default class SmallCategory {
  constructor(obj) {
    this.obj = obj;
    this.container = document.querySelector('.page-section > div');
  }

  getDataImage() {
    return this.obj.map((item) => {
      return `
      <div class="col-md-4 col-sm-6">
        <div id="" class="small__category_item">
          <div class="small__category_img-inner">
            <a href="${item.href}" class="img-inner__link">
              <h3 class="img-inner_title">${item.title}</h3>
              <img
                class="small-category__img"
                src="${item.src}"
              />
            </a>
          </div>
        </div>
      </div>
      `;
    });
  }

  setTemplate() {
    return `
      <div class="small__category">
        <div class="row">${this.getDataImage().join('')}</div>
      </div>
    `;
  }

  render() {
    this.container.insertAdjacentHTML('afterbegin', this.setTemplate());
  }
}
