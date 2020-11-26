import template from './template.js';

const cart = document.querySelector('.header-cart')

export default class ButtonListInHeader {
  constructor(container, icons) {
    this.container = container;
    this.host = location.host;
    this.cart = cart;
    this.template = template(icons, this.cart, this.host);
  }

  setTemplate() {
    this.container.insertAdjacentHTML('beforeend', this.template);
  }
}