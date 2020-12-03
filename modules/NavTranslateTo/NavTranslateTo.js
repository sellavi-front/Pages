import CreateAddContainer from '../CreateAddContainer/CreateAddContainer.js';

export default class NavTranslateTo {
  constructor(container, target) {
    this.container = container;
    this.target = target;
    this.nav = document.querySelector('.navigation-wrapper .navigation');
  }

  translate() {
    new CreateAddContainer(this.container, this.target, this.nav.outerHTML).render();
  }
}