export default class ChangeErrorMessage {
  constructor() {
    this.btn = document.querySelector('#button-cart');
  }

  setMessage(alerts) {
    console.log(alerts);
    alerts.forEach((alert) => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`;
    });
  }

  change() {
    console.log(this.btn);
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
