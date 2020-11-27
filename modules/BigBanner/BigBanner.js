export default class BigBanner {
  constructor(obj = {}, link = undefined) {
    this.obj = obj;
    this.link = link === undefined ? this.obj : link;
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
            ${!this.obj.urlImg ? this.link : this.obj.urlImg }
            )">
          </div>
<<<<<<< HEAD
          ${ this.obj.length > 0
              ? this.setCaption()
=======
          ${ this.obj.lenth > 0
              ? this.setCaption(this.obj)
>>>>>>> 1c31b474aa2766bc6c2af1855b668f6c511c35d7
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
