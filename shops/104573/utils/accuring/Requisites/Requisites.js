import termsOfUse from './../../../../../modules/Requisites/docs/termuse.js'
import policy from './../../../../../modules/Requisites/docs/policy.js'
import payDelivery from './../Requisites/docs/pay-delivery.js'


class RequisitesEntity {
  constructor(
    obj,
    target,
    nameOrg = 'Общество с ограниченой ответственность Альтаир',
    container = document.querySelector('.requsitess'),
    payDeliveryIfo = {},
  ) {
    this.obj = obj
    this.target = target
    this.container = container
    this.arr = []
    this.nameOrg = nameOrg
    this.payDeliveryIfo = payDeliveryIfo
  }

  setItemtemplate(content) {
    return `
      <p class="requsites__elem mb-2">
        ${content[0]}: <span>${content[1]}</span>
      </p>`
  }

  setData() {
    const arr = Object.entries(this.obj)
    return Array.prototype.slice.call(arr).map((item) => this.setItemtemplate(item))
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
      )
    } else if (this.container.classList.contains('requsitess')) {
      this.container.insertAdjacentHTML(
        this.target,
        `
        <div class="requsites__data">
          <h6 class="requsites__title">Реквизиты продавца</h6>
          ${this.setData().join('')}
        </div>`,
      )

      this.container.insertAdjacentHTML('afterbegin', termsOfUse(this.nameOrg))
    } else if (location.href.includes('policy')) {
      this.container.insertAdjacentHTML(this.target, policy)
    } else if (location.href.includes('pay-delivery')) {
      this.container.insertAdjacentHTML(this.target, payDelivery(this.payDeliveryIfo))
    }
  }
}

export default RequisitesEntity
