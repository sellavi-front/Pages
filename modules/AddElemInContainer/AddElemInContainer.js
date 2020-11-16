/* ==============================================================================================

  Класс осуществялет поиск контейнера в который вставляет необходимый элемент в начало контейнера
  copy() -- копирует элемент при этом определяя ,если это массив то использует метод,
  который копирует массив иначе копирует как обыный элемент

  delete() удаляет элемент который был скопирован
  findElements() -- осуществялет поиск эоемента в доме и отрпавлет его в метод  copy()
  render() отрисовывает элементы на странице

================================================================================================= */

export default class AddElemInContainer {
  constructor(elem, container) {
    this.container = container;
    this.elem = elem;
    //[this.el, this.cont] = this.findElements();
  }

  copyArr(arr) {
    return Array.from(arr);
  }

  copyEl(el) {
    return el.cloneNode(true);
  }

  delete(item) {
    if (item.lenth) item.forEach((e) => e.remove());
    item.remove();
  }

  copyType(data) {
    if (data.length) this.copyArr(data);
    return this.copyEl(data);
  }

  findElements() {
    const elem = this.copyType(this.addElem);
    const cont = this.container;

    this.delete(this.addElem);
    return [elem, cont];
  }

  addElements() {
    this.cont.forEach((cont, i) => {
      cont.insertAdjacentHTML('afterbigin', [addToCart[i], addToWishList[i]]);
    });
  }

  render() {
    //this.cont.forEach((elem, idx) => {
    this.container.insertAdjacentElement('afterbegin', this.elem);
    //});
  }
}
