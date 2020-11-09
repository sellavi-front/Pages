export default class LikeInCard {
  constructor(container, btns) {
    this.container = container;
    this.btns = btns;
  }

  transport() {
    this.addToCart.forEach((el, idx) => el.insertAdjacentHTML('afterbegin', this.btns[idx].outerHTML));
    this.delete();
  }

  delete() {
    this.container.forEach((el) => el.remove());
  }
}
