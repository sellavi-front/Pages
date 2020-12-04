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

// <div class="requsitess"></dvi> "Это необходимо вставить в код при создании страницы Пользовательского соглашение"

import termsOfUse from './docs/termsOfuse.js';
import policy from './docs/policy.js';
import payDelivery from './docs/pay-delivery/pay-delivery.js'

export default class Requisites {
  constructor(
    obj,
    target,
    nameOrg = 'Общество с ограниченой ответственность Альтаир',
    container = document.querySelector('.requsitess'),
    payDeliveryIfo = {},
  ) {
    this.obj = obj;
    this.target = target;
    this.container = container;
    this.arr = [];
    this.nameOrg = nameOrg;
    this.payDeliveryIfo = payDeliveryIfo;
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
          <div class="media-body requsites__data">
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

      this.container.insertAdjacentHTML('afterbegin', termsOfUse(this.nameOrg));
    } else if (this.container.classList.contains('col-md-12')) {
      this.container.insertAdjacentElement(this.target, this.policy);
    } else if (this.container.classList.contains('col-md-12')) {
      this.container.insertAdjacentElement(this.target, payDelivery(this.payDeliveryIfo));
    }
  }
}
