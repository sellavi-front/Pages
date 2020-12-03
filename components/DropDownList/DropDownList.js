import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

// 1 - Array of accordion: button name, html - description, 2 - container, 3 - target

export default class DropDownList {

  constructor(container, target, data) {
    this.data = data
    this.target = target
    this.container = container
  }

  setTemplate() {
    return `
      <div class="container-fluid">
         ${this.setData(this.data).join('')}
      </div>
    `
  }

  setData() {
    return this.data.map(item => {
      return `
        <div class="dropdown__list_item">
            <button class="accordion">${item.buttonTitle}</button>
            <div class="panel">
              ${item.description}
            </div>
        </div>
      `
    })
  }

  setClicker() {
    document.querySelectorAll(".accordion").forEach(a => {
      a.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    })
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    )
    createAddContainer.render()
    this.setClicker()
  }

}