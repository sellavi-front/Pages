import template from './template.js'
export default class GridBannerGalery {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
  }

  render() {
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
