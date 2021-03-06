export default class BigBanner {
  constructor(link, obj = {}) {
    this.obj = obj;
    this.link = link;
  }

  setCaption(o) {
    return `<div class="banner__caption">
        <h1>${o.title}</h1>
        <a href="${o.link}">
          ${o.linkContent}
        </a>
      </div>`;
  }

  setTemplate() {
    return `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image" style="background: url(
            ${this.link}
            )">
          </div>
          ${
            Object.keys(this.obj).length > 0
              ? this.setCaption(this.obj)
              : `<div class="banner__caption"></div>`
          }
        </div>
      </div>`;
  }

  render() {
    return document.querySelector('.custom_banner').insertAdjacentHTML('afterbegin', this.setTemplate());
  }
}
