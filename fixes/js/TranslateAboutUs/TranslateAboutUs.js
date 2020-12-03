export default class TranslateAboutUs {
  constructor() {
    this.widget = document.querySelector("footer>.footer-widgets>.container>.row>div:nth-child(1)>.widget");
    this.widTitle = this.widget.querySelector('.widget-title');
    this.widCat = this.widget.querySelector('.widget-categories>ul>li:first-child>a');
    this.textTrans = 'About us ';
    this.textRus = 'О нас';
  }

  translate() {
    if (this.widTitle.textContetn == this.textTrans || this.widCat.textContent == this.textTrans) {
      this.widTitle.textContent = this.textRus;
      this.widCat.textContent = this.textRus;
    }
  }
}

const Translate = new TranslateAboutUs();

Translate.translate();
