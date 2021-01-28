import BaseComponent from "../../../../components/BaseComponent/BaseComponent.js"

export default class medSocProg extends BaseComponent {
  constructor(props, data) {
    super(props);
    this.data = data;
  }

  getData() {
    return this.data.map(elem => {
      return `
        <div class="partner">
          <img src="${elem.src}" alt="" />
          <h3 class="page-section__title">${elem.title}</h3>
          <p class="page-section__ph">
              ${elem.text}
          </p>
          <a href="${elem.link}">ссылка</a>
        </div>
      `
    }).join('')
  }

  getTemplate() {
    return `
      <section class="page-section__content partners">
        ${this.getData()}
      </section>
    `
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}