export default class LikeInCard {
  constructor(container, btns) {
    this.container = container;
    this.btns = btns;
    console.log(this.container);
    console.log(this.btns);
  }

  transport() {
    this.container.forEach((el, idx) => el.insertAdjacentHTML('afterbegin', this.btns[idx].outerHTML));
    this.delete();
  }

  delete() {
    this.container.forEach((el) => el.remove());
  }
}
