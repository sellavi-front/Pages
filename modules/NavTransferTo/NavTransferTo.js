import CreateAddContainer from '../CreateAddContainer/CreateAddContainer.js';

export default class NavTranslateTo {
  constructor(container, target) {
    this.container = container;
    this.target = target;
    this.wrapper = document.querySelector('.navigation-wrapper');
    this.nav = document.querySelector('.navigation-wrapper .navigation');
  }

  transfer() {
    new CreateAddContainer(this.container, this.target, this.nav.outerHTML).render();
    this.wrapper.remove();
  }
}