/* ==============================================================================================

  Класс осуществялет поиск контейнера в который вставляет необходимый элемент в начало контейнера
  copy() -- копирует элемент при этом определяя ,если это массив то использует метод,
  который копирует массив иначе копирует как обыный элемент

  delete() удаляет элемент который был скопирован
  findElements() -- осуществялет поиск эоемента в доме и отрпавлет его в метод  copy()
  render() отрисовывает элементы на странице

================================================================================================= */

class AddElemInContainer {
  constructor(d, addElem, container) {
    this.container = container;
    this.addElem = addElem;
    this.d = d;
    [this.el, this.cont] = this.findElements();
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

  render() {
    //this.cont.forEach((elem, idx) => {
      //console.log('elem', elem);
      //console.log('idx', idx);

      this.cont.insertAdjacentElement('afterbegin', this.el);
    //});
  }
}
