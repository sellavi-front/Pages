import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import SubmitForm from '../../modules/SubmitForm/SubmitForm.js';
import {tags} from '../../modules/SubmitForm/utils/tags.js';
export default class FormBasic {
  constructor(container, target, data = {}, tagsArr = tags) {
    this.data = data;
    this.target = target;
    this.container = container;
    this.tagsArr = tagsArr;
  }

  setData(item) {
    return `
      <div class="sender-basic__content">
        <h2 class="sender-basic__title">${item.title}</h2>
        <p class="sender-basic__text">${item.content}</p>
      </div>
      ${new SubmitForm('form-grp', this.tagsArr).getForm()}
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


