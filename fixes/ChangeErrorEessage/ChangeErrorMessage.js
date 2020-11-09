export default class ChangeErrorMessage {
  constructor() {
    this.btn = document.querySelector('#button-card');
  }
  setMessage() {
    console.log(this.alerts);
    this.alerts((alert) => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`;
    });
  }

  change() {
    this.btn.addEventListener('click', this.setMessage(document.querySelectorAll('.text-danger')));
  }
}
