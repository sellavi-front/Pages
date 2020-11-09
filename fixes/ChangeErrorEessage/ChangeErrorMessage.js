export default class ChangeErrorMessage {
  constructor() {
    this.btn = document.querySelector('#button-cart');
  }
  setMessage(alerts) {
    console.log(alerts);
    alerts((alert) => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`;
    });
  }

  change() {
    console.log(this.btn)
    this.btn.addEventListener('click', this.setMessage(document.querySelectorAll('.text-danger')));
  }
}
