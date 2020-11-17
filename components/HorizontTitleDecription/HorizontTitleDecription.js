export default class HorizontTitleDecription {
  constructor(title, descp, container) {
    this.title = title;
    this.descp = descp;
    this.container = container;
  }

  setTemplate() {
    return `
      <div class="about">
        <h2 class="about__title">${this.title}</h2>
        <p class="about__description">${this.descp}</p>
      </div>
    `;
  }

  render() {
    this.container.insertAdjacentHTML('afterbegin', this.setTemplate());
  }
}
