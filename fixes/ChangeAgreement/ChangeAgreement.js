export default class ChangeAgreement {
  constructor() {
    this.checkbox = document.querySelector('.checkbox>label');
  }

  change() {
    this.checkbox.insertAdjacentHTML(
      'beforeend',
      `Согласен (-а) с условиями <a href="/terms-of-use/" style="text-decoration: none !important;"><b>Публичной оферты</b></a>`,
    );
  }
}

if (location.href.includes('checkout')) {
  const newChange = new ChangeAgreement();
  newChange.change();
}
