import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

// 1 - Array of accordion: section name, html - description, 2 - container, 3 - target

export default class DropDownList {

  constructor(/*container, target, */data) {
    this.data = data
    /*this.target = target
    this.container = container*/
  }

  setTemplate() {
    console.log(this.data)/*`
      <div class="dropdown__list_container">
          ${this.setData(this.data).join('')}
      </div>
    `*/
  }

  setData() {
    console.log(this.data)
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