import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

// 1 - Array of accordion: section name, html-description, 2 - container, 3 - target

export default class DropDownList {
  constructor(container, target, data) {
    console.log(data)
    this.data = data;
    this.target = target;
    this.container = container;
  }

  setTemplate() {
    /*return `
      <div class="about">
        <div class="container">
          <div class="about__container">
            ${this.setData(this.data).join('')}
          </div>
        </div>
      </div>
    `;*/
  }

  setData() {

  }

  render() {
    /*const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();*/
  }


}