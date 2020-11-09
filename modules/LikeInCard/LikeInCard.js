export default class LikeInCard {
  constructor(container, btns) {
    this.container = container;
    this.btns = btns;
    console.log(this.container);
    console.log(this.btns);
  }

  transport() {
    this.container.forEach((el, idx) => el.insertAdjacentHTML('afterbegin', this.clone()[idx].outerHTML));
    this.delete();
  }

  clone() {
    return Array.from(this.btns);
  }

  delete() {
    this.btns.forEach((el) => el.remove());
  }
}
