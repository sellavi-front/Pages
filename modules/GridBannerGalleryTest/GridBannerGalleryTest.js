import parentBanner from './templates/template.js';
// import './styles/GridBannerGallery.css';

export default class GridBannerGalleryTest {
  constructor(elem, content) {
    this.elem = elem;
    this.content = content;
    console.log(parentBanner);
    console.log(parentBanner());
  }

  render() {
    console.log(parentBanner(this.content));
    this.elem.insertAdjacentHTML('afterbegin', parentBanner(this.content));
  }
}
