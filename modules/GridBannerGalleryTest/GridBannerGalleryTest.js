import { parentBanner } from './templates/template.js';

// import './styles/GridBannerGallery.css';

export default class GridBannerGalleryTest {
  constructor(elem, content) {
    this.elem = elem;
    this.content = content;
  }

  render() {
    this.elem.insertAdjacentHTML('afterbegin', `<div class="banner-gallery">${parentBanner(this.content)}</div>`);
  }
}
