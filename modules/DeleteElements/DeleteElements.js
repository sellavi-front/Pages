/* ===============     - DeleteElements -    ==============*/

/* ***** Класс принимает на вход массив DOM элементов **** */

/* =============== ======= ======= =======  ======= =======*/

export default class DeleteElements {
  constructor(elements) {
    this.elements = elements;
  }

  remove() {
    this.elements.forEach(el => {
      el.remove();
    })
  }
}