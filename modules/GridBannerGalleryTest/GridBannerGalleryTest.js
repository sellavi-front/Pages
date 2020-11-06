import template from './templates/template.js';
// import './styles/GridBannerGallery.css';

export default class GridBannerGalleryTest {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
    this.render();
  }

  render() {
    console.log('render');
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
