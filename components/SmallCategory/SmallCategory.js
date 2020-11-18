const data = [
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
  {
    href: 'https://www.ecovita.ru/upload/iblock/515/O4ISTKA_KVARTIRA.jpg',
    src: '#',
    title: 'Очистка воды',
  },
];

export default class SmallCategory {
  constructor(obj) {
    this.obj = obj;
    this.container = document.querySelector('.page-section > div')
  }

  getDataImage() {
    return Object.entries(this.obj).map(item => {
      console.log(item);
      return `
      <div class="col-md-4 col-sm-6">
        <div id="" class="item">
          <div class="img_inner">
            <a href="${item.href}">
              <h3 class="img_inner-title">${item.title}</h3>
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
      <div class="adv_list small_banners">
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
