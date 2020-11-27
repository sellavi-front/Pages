export default class BigBanner {
  constructor(obj, link = undefined) {
    this.obj = obj;
  }

  setCaption() {

      return`<div class="banner__caption">
        <h1>${this.obj.title}</h1>
        <a href="${this.obj.link}">
          ${this.obj.linkContent}
        </a>
      </div>`;
    }
  }

  setTemplate() {
    return `
      <div class="outer-container">
        <div class="banner">
          <div class="banner__image" style="background: url(
            ${!this.obj.urlImg ? this.link : this.obj.urlImg}
            )">
          </div>
          ${ !this.obj.title
              ? this.setCaption()
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
