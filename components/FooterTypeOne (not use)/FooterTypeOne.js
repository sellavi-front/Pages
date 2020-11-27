import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class FooterTypeOne {
  constructor(container, target) {
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    return `
        <div class="footer-custom">
          <div class="container">
          <div class="footer-custom__container">
            ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setData() {
    return this.data.map(
      (item) => `
        <div class="footer-custom__">

        </div>
      `,
    );
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}
