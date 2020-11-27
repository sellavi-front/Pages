const defaultOptions = {
  items: 4,
  margin: 10,
  loop: true,
  nav: true,
  center: true,
  touchDrag: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<span class="arrow-owl arrow-left"><i class="far fa-angle-left"></i></span>',
    '<span class="arrow-owl arrow-right"><i class="far fa-angle-right"></i></span>'
  ],
  responsive:{
    0:{
      items:1
    },
    768:{
      items:3
    },
    1180:{
      items:5
    }
  }
};

export default class SmallImgSlider {
  constructor(data, container, options = defaultOptions) {
    this.data = data;
    this.options = options;
    this.container = container;
  }

  setOptions() {
    return $('.custom_section > div > .owl-carousel').owlCarousel(this.options);
  }

  getItem() {
    return this.data.map((item) => {
      try {
      return `
        <div class="item" style="width:250px">
          <img src="${item.src}" alt="${item.alt}">
        </div>`
      } catch (err) {
        console.log(`При отрисовке слайдера произошла ошибка: ${err}`);
      }
    });
  }

  setTemplate() {
    this.container.insertAdjacentHTML(
      'beforeend',
      `
      <div class="container-fluid" style="display: block">
        <div class="owl-carousel">
          ${this.getItem().join('')}
        </div>
      </div>
    `,
    );
  }
}

