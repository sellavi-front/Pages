import BaseComponent from '../BaseComponent/BaseComponent.js';

export default class Steps extends BaseComponent {
  // props = [container, target, template]
  constructor(args, data) {
    super(args);
    this.data = data;
  }

  getData() {
    return this.data.content
      .map((elem, i) => {
        return `
        <article class="step">
          <div class="step-top">
            <div class="num">${i.toString()}</div>
          </div>
          <div class="step-bottom">
            <p>
              ${elem}
            </p>
          </div>
        </article>
      `;
      })
      .join('');
  }

  getTemplate() {
    return `
      <div class="steps">
        <h2>${this.data.title}</h2>
        <div class="steps__container">
          ${this.getData()}
        </div>
      </div>
    `;
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}
