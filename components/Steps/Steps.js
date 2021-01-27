import CreateAddContainer from '../../CreateAddContainer/CreateAddContainer.js';

export default class Steps extends BaseComponent {
  // props = [container, target, template]
  constructor(args, data) {
    super(args);
    this.data = data;
  }

  getData() {
    return this.data
      .map((elem, i) => {
        return `
        <article class="step">
          <div class="step-top">
            <span>${i.toString()}</span>
          </div>
          <div class="step-bottom">
            <p>
              ${elem.text}
            </p>
          </div>
        <article>
      `;
      })
      .join('');
  }

  getTemplate() {
    return `
      <div class="steps">
        ${this.getData()}
      <div>
    `;
  }

  setTemplate() {
    return this.render(this.getTemplate());
  }
}

const props = {
  container: document.querySelector('.page-section .container'),
  target: 'beforeend',
};

const data = [{ text: 'a' }, { text: 'a' }];

const steps = new Steps(props, data);

steps.setTemplate();
