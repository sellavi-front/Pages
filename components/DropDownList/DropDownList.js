import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

// 1 - Array of accordion: section name, html - description, 2 - container, 3 - target

export default class DropDownList {

  constructor(/*container, target, */data) {
    this.data = data
    /*this.target = target
    this.container = container*/
  }

  setTemplate() {
    this.setData()

    /*return `
      <div class="dropdown__list_container">
        ${this.setData(this.data)}
      </div>
    `*/
    /*`
      <div class="dropdown__list_container">
          ${this.setData(this.data).join('')}
      </div>
    `*/
  }

  setData() {
    /*return this.data.forEach(item => {
      `
        <div class="dropdown__list_item">
            <button class="accordion">${item.buttonTitle}</button>
            <div class="panel">
              ${item.description}
            </div>
        </div>
      `
    })*/
    console.log("Before set: ", this.data)
    return this.data.map(item => {
      `<div class="test">${item.buttonTitle}<br>${item.description}</div>`
    }, console.log("After set: ", this.data))
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