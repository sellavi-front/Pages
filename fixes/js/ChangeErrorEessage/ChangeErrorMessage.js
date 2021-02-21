export default class ChangeErrorMessage {
  constructor() {
    this.btn = document.querySelector('#button-cart');
  }

  setMessage(alerts) {
    alerts.forEach((alert) => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`;
    });
  }

  change() {
    this.btn.addEventListener('click', () => {
      const alerts = document.querySelectorAll('.text-danger');
      this.setMessage(alerts);
    });
  }
}

if (document.querySelector('.product-product')) {
  const newChangeError = new ChangeErrorMessage();

  newChangeError.change();
}
