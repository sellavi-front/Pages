const data = [
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711400/Water%20Filter/hans-reniers-lQGJCMY5qcM-unsplash_1_tgp0d6.jpg',
    title: 'Очистка воды',
  },
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711895/Water%20Filter/moritz-kindler-9vCCQ9h7OoY-unsplash_or115o.jpg',
    title: 'Очистка воды',
  },
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711895/Water%20Filter/ethan-sykes-TYxSsTtMYCQ-unsplash_jdsz3e.jpg',
    title: 'Очистка воды',
  },
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711400/Water%20Filter/hans-reniers-lQGJCMY5qcM-unsplash_1_tgp0d6.jpg',
    title: 'Очистка воды',
  },
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711895/Water%20Filter/moritz-kindler-9vCCQ9h7OoY-unsplash_or115o.jpg',
    title: 'Очистка воды',
  },
  {
    href: '#',
    src: 'https://res.cloudinary.com/gz-company/image/upload/v1605711895/Water%20Filter/ethan-sykes-TYxSsTtMYCQ-unsplash_jdsz3e.jpg',
    title: 'Очистка воды',
  },
];

export default class SmallCategory {
  constructor(obj) {
    this.obj = obj;
    this.container = document.querySelector('.page-section > div')
  }

  getDataImage() {
    return this.obj.map(item => {
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
      `
    })
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

const nw = new SmallCategory(data);
nw.render();
