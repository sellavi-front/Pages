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
            <div class="num">${(i + 1).toString()}</div>
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
      <section class="steps">
        <h3 class="steps__title">${this.data.title}</h3>
        <div class="steps__container">
          ${this.getData()}
        </div>
      </section>
    `;
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}
