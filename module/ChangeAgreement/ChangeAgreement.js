export default class ChangeAgreement {
  constructor(doc) {
    this.doc = doc;
  }

  change() {
    const checkbox = this.doc.querySelector('.checkbox>label');
    checkbox.textContent = 'Согласен (-а) с условиями <a href="/terms-of-use/" style="text-decoration: none !important;"><b>Публичной оферты</b></a>';
  }
}
