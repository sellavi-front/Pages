export default class ChangeErrorMessage {
  setMessage() {
    console.log(this.alerts);
    this.alerts((alert) => {
      const nameBlock = alert.parentElement.firstElementChild;
      alert.innerHTML = `Поле ${nameBlock.textContent.toLowerCase()} обязательно!`;
    });
  }

  change() {
    const btn = document.querySelector('#button-card');
    console.log(btn)
    btn.addEventListener('click', this.setMessage(document.querySelectorAll('.text-danger')));
  }
}
