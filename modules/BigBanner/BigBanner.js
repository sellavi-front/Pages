export default class BigBanner {
  constructor(obj = undefined) {
    this.obj = obj;
  }

  setTemplate() {
    return `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image" style="background: url(${this.obj.urlImg})"></div>
          <div class="banner__caption">
            <h1>${this.obj.title}</h1>
            <a href="${this.obj.link}">
              ${this.obj.linkContent}
            </a>
          </div>
        </div>
      </div>`;
  }

  render() {
    const banner = document.querySelector('.custom_banner');
    return banner.insertAdjacentHTML('afterbegin', this.setTemplate());
  }
}
