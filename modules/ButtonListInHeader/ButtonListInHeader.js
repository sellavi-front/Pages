import template from './template.js';

const cartt = document.querySelector('.header-cart')

export default class ButtonListInHeader {
  constructor(container, icons) {
    this.container = container;
    this.host = location.host;
    this.cartt = cartt;
    this.template = template(icons, this.cartt, this.host);
  }

  setTemplate() {
    this.container.insertAdjacentHTML('beforeend', this.template);
  }
}