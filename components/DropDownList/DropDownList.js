import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

// 1 - Array of accordion: section name, html - description, 2 - container, 3 - target

export default class DropDownList {

  constructor(/*container, target, */data) {
    this.data = data
    /*this.target = target
    this.container = container*/
  }

  setTemplate() {
    return `
      <div class="dropdown__list_container">
        ${this.setData(this.data).join('')}
      </div>
    `/*`
      <div class="dropdown__list_container">
          ${this.setData(this.data).join('')}
      </div>
    `*/
  }

  setData() {
    return this.data.map(item => {
      `
        <div class="dropdown__list_item">
            <button class="accordion">${item.buttonTitle}</button>
            <div class="panel">
              ${item.description}
            </div>
        </div>
      `
    })
  }

  render() {
    /*const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    )
    createAddContainer.render()*/
    this.setTemplate()
  }

}