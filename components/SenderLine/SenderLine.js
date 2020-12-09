import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import SubmitForm from '../../modules/SubmitForm/SubmitForm.js';

export default class FormBasic {
  constructor(container, target, data = {}) {
    this.data = data;
    this.target = target;
    this.container = container;
    this.form = new SubmitForm()
  }

  setData(item) {
    return `
      <div class="sender-basic__content">
        <h5 class="sender-basic__content-title">
          Подпишись на рассылку
        </h5>
        <p clas="sender-basic__content-text">
          Узнавай первым о новинках, акциях и распродажах
        </p>
      </div>
      ${this.form.getForm()}
    `
  }

  setTemplate() {
    return this.data.map(
      (item) => `
      <div class="container">
        <div class="sender-basic">
            ${this.setData(item)}
        </div>
      </div>
      `,
    );
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}


