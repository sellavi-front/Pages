// const data = {
//   'Организация' : '',
//   'Юр. Адрес': '',
//   'Почтовый адрес': '',
//   'ИНН': '',
//   'ОГРН': '',
//   'Банк': '',
//   'Рассчетный счет': '',
//   'Корр. Счёт': '',
//   'БИК': '',
//   'Директор': '',
// };

import termsOfUse from './docs/termsOfuse.js';
export default class Requisites {
  constructor(obj, target, container = document.querySelector('.requsitess')) {
    this.obj = obj;
    this.target = target;
    this.container = container;
    this.arr = [];
  }

  setItemtemplate(content) {
    return `
      <p class="requsites__elem">
        ${content[0]}: <span>${content[1]}</span>
      </p>`;
  }

  setData() {
    const arr = Object.entries(this.obj);
    return arr.map((item) => this.setItemtemplate(item));
  }

  setTemplate() {
    if (this.container.classList.contains('media')) {
      this.container.insertAdjacentHTML(
        this.target,
        `<div class="media">
          <i class="float-right fa fa-info"></i>
          <div class="meida-body requsites__data">
            <div class="requsites__list">
              <strong>Реквизиты продавца</strong>
              ${this.setData().join('')}
            </div>
          </div>
        </div>`,
      );
    } else if (this.container.classList.contains('requsitess')) {
      this.container.insertAdjacentHTML(
        this.target,
        `
        <div class="requsites__data">
          <h4 class="requsites__title">Реквизиты продавца</h4>
          ${this.setData().join('')}
        </div>`,
      );

      this.container.insertAdjacentHTML('beforeEnd', termsOfUse);
    }
  }
}
