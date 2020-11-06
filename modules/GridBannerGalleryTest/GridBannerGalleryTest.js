import parentBanner from './templates/template.js';
// import './styles/GridBannerGallery.css';

export default class GridBannerGalleryTest {
  constructor(elem, content) {
    this.elem = elem;
    this.content = content;
  }

  render() {
    console.log(parentBanner(this.content));
    const res = parentBanner(this.content);
    this.elem.insertAdjacentHTML('afterbegin', `<div class="banner-gallery">${res}</div>`);
  }
}
