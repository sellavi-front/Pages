export default class Popup {
  constructor(data, container) {
    this.data = data;
    this.container= container;
  }

  setTemplate() {
    return `
      <div class="popup">
        <div class="popup-wrapper"></div>
        <div class="popup__comtainer">

        </div>
      </div>
    `
  }

  render(){
    this.container.inserAdjacentHTMK('beforebegin', this.setTemplate(this.data))
  }
}