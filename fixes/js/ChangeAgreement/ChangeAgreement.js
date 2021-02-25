export default class ChangeAgreement {
  constructor() {
    this.checkbox = document.querySelector('.checkbox>label');
  }

  change() {
    this.checkbox.textContent = '';
    this.checkbox.insertAdjacentHTML(
      'beforeend',
<<<<<<< HEAD
      `Согласен (-а) с условиями <a href="/term-of-use/" style="text-decoration: underline !important;"><b>Публичной оферты</b></a>`,
=======
      `Согласен (-а) с условиями <a href="/term-of-use/" class="agree-checkbox"><b>Публичной оферты</b></a>`,
>>>>>>> 686227069cde8a3273a53f09350b9f1e653c3a52
    );
  }
}

if (location.href.includes('/checkout') || location.href.includes('/register')) {
  const newChange = new ChangeAgreement();
  newChange.change();
}
