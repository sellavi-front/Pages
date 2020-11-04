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

  errorHandler(msg) {
    console.log(msg);
  }

  copyArr(arr) {
    if (!this.copyType(arr)) this.errorHandler('Элемент не найден или произошла неизвестная ошибка');
    return Array.from(arr);
  }

  copyEl(el) {
    if (!this.copyType(el)) this.errorHandler('Элемент не найден или произошла неизвестная ошибка');
    return el.cloneNode(true);
  }

  delete(item) {
    if (typeof item === 'object') this.item.forEach((e) => e.remove());
    item.remove();
  }

  copyType(data) {
    if (typeof data === 'object') return this.copyArr(data);
    return this.copyEl(data);
  }

  findElements() {
    const elem = this.copyType(this.addElem);
    const cont = this.container;

    this.delete(this.addElem);
    return [elem, cont];
  }

  render() {
    this.cont.forEach((elem, idx) => {
      elem.insertAdjacentHTML('afterbegin', this.el[idx]);
    });
  }
}
