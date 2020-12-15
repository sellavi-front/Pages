import termsOfUse from './docs/termsOfuse.js';
import policy from './docs/policy.js';
import setTemplate from './docs/pay-delivery/pay-delivery-test.js';
import {setDelivery, setPickup, setPayment} from './docs/pay-delivery/templates/templates.js';

export default class Requisites {
  defaultOptions = [
    {
      bool: true,
      func: setPayment(),
    },
    {
      bool: true,
      func: setDelivery(),
    },
    {
      bool: true,
      func: setPickup(),
    },
  ];

  constructor(
    obj,
    target,
    nameOrg = 'Общество с ограниченой ответственность Альтаир',
    container = document.querySelector('.requsitess'),
    options = defaultOptions,
  ) {
    this.obj = obj;
    this.target = target;
    this.container = container;
    this.arr = [];
    this.nameOrg = nameOrg;
    this.options = options;
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
    } else if (location.href.includes('policy')) {
      this.container.insertAdjacentHTML(this.target, policy);
    } else if (location.href.includes('pay-delivery')) {
      console.log('opt ', this.options);
      this.container.insertAdjacentHTML(this.target, setTemplate(this.options));
    }
  }
}
