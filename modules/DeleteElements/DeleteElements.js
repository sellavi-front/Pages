/* ===============     - DeleteElements -    ==============*/

/* ***** Класс принимает на вход массив DOM элементов **** */

/* =============== ======= ======= =======  ======= =======*/

export default class DeleteElements {
  constructor(elements) {
    this.elements = elements;
  }

  remove() {
    console.log(this.elements);
    this.elements.forEach((el) => {
      console.log(el);
      !el ? console.log(`Элемент ${el} не найден`) : el.remove();
    });
  }
}
