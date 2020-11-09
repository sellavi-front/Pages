export default class ChangeErrorMessage {
  constructor() {
    this.alerts = document.querySelectorAll('.text-danger');
  }

  setMessage() {
    this.alerts(alert => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`
    })
  }

  change() {
    $('#button-cart').on('click', this.setMessage());
  }
}
