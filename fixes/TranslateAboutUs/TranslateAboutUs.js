export default class TranslateAboutUs {
  constructor() {
    this.widget = document.querySelector('.footer-widgets>.container>.row>div:first>.widget');
    this.widTitle = widget.querySelector('.widget-title');
    this.widCat = widget.querySelector('.widget-categories>ul>li:first-child>a');
    this.textTrans = 'About us ';
    this.textRus = 'О нас';
  }

  translate() {
    if (this.widTitle.html() == this.textTrans || this.widCat.html() == this.textTrans) {
      this.widTitle.textContent = this.textRus;
      this.widCat.textContent = this.textRus;
    }
  }
}
