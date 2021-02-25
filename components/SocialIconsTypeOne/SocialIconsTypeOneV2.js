import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class SocIconsTypeOneV2 {
  constructor(container, target, data = null || undefined) {
    this.target = target;
    this.container = container;
    this.data = data;

  }

  setTemplate() {
    return `
    <div class="col-md-3">
      <div class="widget widget-categories">
        <h4 class="widget-title">Клиентам</h4>
        <div class="soc-icons">
            <div class="soc-icons__container">
              ${this.setData().join('')}
            </div>
        </div>
      </div>
    </div>
    `;
  }

  setData() {
    return Object.values(this.data).map(
      (item) => `
        <div class="soc-icons__item">
          <a href="">
            <i>${item}</i>
          </a>
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
