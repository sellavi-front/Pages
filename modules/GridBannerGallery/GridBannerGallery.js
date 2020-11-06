import template from './templates/template.js';
import './styles/GridBannerGallery.css';

export default class GridBannerGalery {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
    this.render();
  }

  render() {
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
