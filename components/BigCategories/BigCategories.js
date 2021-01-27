export default class BigCategories {
  constructor(doc, obj) {
    this.doc = doc;
    this.obj = obj;
  }

  setFetch() {

  }

  setTemplate() {
    return `
    <ul class="cards">
      <li class="cards__item">
        <div class="card">
          <div class="card__image" style="background-image: url(${this.obj.img_url}); height: 100vh">
            <div class="card__title"><a href="${this.obj.link}">${this.obj.title}</a></div>
          </div>
        </div>
      </li>
    </ul>
    `
  }

  render() {
    const afterBanner = this.doc.querySelector('.custom_banner');
    return afterBanner.insertAdjacentHTML('afterend', this.setTemplate());
  }
}
