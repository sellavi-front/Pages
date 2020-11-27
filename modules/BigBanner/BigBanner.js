export default class BigBanner {
  constructor(obj = {}, link) {
    this.obj = obj;
    this.link = link;
    console.log(this.obj, this.link)
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
          ${ this.obj.length > 0
              ? this.setCaption(this.obj)
              : `<div class="banner__caption"></div>`
           }
        </div>
      </div>`;
  }

  render() {
    const banner = document.querySelector('.custom_banner');
    return banner.insertAdjacentHTML('afterbegin', this.setTemplate());
  }
}
