export default class TranslateAboutUs {
  constructor() {
    this.widget = document.querySelector(
      'footer>.footer-widgets>.container>.row>div:nth-child(1)>.widget',
    );
    this.widTitle = this.widget.querySelector('.widget-title');
    this.widCat = this.widget.querySelector('.widget-categories>ul>li:first-child>a');
    this.textTrans = 'О НАС';
    this.textRus = 'О нас';
  }

  translate() {
<<<<<<< HEAD
    if (this.widTitle.textContent == this.textTrans || this.widCat.textContent == this.textTrans) {
      this.widTitle.textContent = this.textRus.toLowerCase();
      this.widCat.textContent = this.textRus;
=======
    if (this.widTitle.textContent === this.textTrans || this.widCat.textContent === this.textTrans) {
      this.widTitle.textContent = this.textRus;
>>>>>>> eugene/eugene-dev
    }
  }
}

if (!location.href.includes('checkout')) {
  const Translate = new TranslateAboutUs();

  Translate.translate();
}
