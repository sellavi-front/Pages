import BaseComponent from "../../../../components/BaseComponent/BaseComponent.js"

export default class medSocProg extends BaseComponent {
  constructor(props, data) {
    super(props);
    this.data = data;
  }

  getData() {
    return this.data.partners.map(elem => {
      return `
        <div class="partner">
          <img class="partner_img" src="${elem.src}" alt="" />
          <h3 class="partners__title">${elem.title}</h3>
          <p class="partners__ph">
              ${elem.text}
          </p>
        </div>`
    }).join('')
  }

  getTemplate() {
    return `
      <section class="main-partner">
        ${this.data.main.map(prtn => {
          return `
          <div class="w-100">
            <img src="${prtn.main.src}">
            <h3 class="partners__title"><b>${prtn.main.title}</b></h3>
            <p class="partners__ph">
              ${prtn.main.text}
            </p>
          <div>
          `
        })}
      </section>
      <section class="partners">
        ${this.getData()}
      </section>
    `
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}