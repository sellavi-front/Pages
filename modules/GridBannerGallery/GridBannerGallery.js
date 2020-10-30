import template from './template.js'
export default class GridBannerGalery {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
  }

  render() {
    console.log('this.template ---- ', this.template);
    console.log('Template ---- ', template);
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}
