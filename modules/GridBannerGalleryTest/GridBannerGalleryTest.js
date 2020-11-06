import parentBanner from './templates/template.js';
// import './styles/GridBannerGallery.css';

export default class GridBannerGalleryTest {
  constructor(elem) {
    this.elem = elem;
    this.template = parentBanner();
  }

  render() {
    console.log(this.template);
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
