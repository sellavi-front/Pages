import template from './template.js';

export default class ButtonListInHeader {

  constructor(container, icons) {
    this.container = container;
    this.host = location.host;
    this.template = template(icons, this.host);
  }

  setTemplate() {
    this.container.insertAdjacentHTML('beforeend', this.template);
  }
}
