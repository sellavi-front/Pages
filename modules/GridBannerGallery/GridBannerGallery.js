import template from './template';

export default class GridBannerGalery {
  constructor(doc) {
    this.doc = doc;
    this.template = template;
  }

  render() {
    const contentArea = this.doc.querySelector('.content-area');
    contentArea.insertAdjacentHTML('afterbegin', this.template);
  }
}
