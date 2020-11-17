export default class DeleteClasses {
  constructor(item, classes) {
    this.classes = classes;
    this.item = item;
  }

  findAndDelete() {
    Array.from(this.item).forEach(el => {
      Array.from(el.classList).map((clss, i) => this.classes.includes(clss) ? el.classList.remove(clss) : console.log(`При удалении класса ${clss} произошла ошибка`));
    })
  }
}
