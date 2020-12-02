import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const tags = {
    tag: {
      name: 'input',
      attributes: {
        selector: 'class="sender-form__input" ',
        type: 'type="name" ',
        placeholder: 'placeholder="Ваше Имя" '
      }
    },
    tag: {
      name: 'input',
      attributes: {
        selector: 'class="sender-form__input" ',
        type: 'type="number"',
        placeholder: 'placeholder="Ваше Имя" '
      }
    },
};

export default class SubmitFormWithoutLabel {
  constructor(container, target, params) {
    this.params = params;
    this.container = container;
    this.target = target;
  }

  setAttributes(attrs) {
    for (let attribute of attrs) {
      return Object.values(attribute)
    }
  }

  setFormDataInTemplate() {
    for(let key of params) {
      return `<${key.tag} ${this.setAttributes(key)}>`
    }
  }

  setTemplate() {
    return `
    <form class="sender-form">
      <div class="sender-form__container">
        ${this.setFormDataInTemplate().join('')}
      </div>
    </form>
    `;
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

const cstm = document.querySelector('.custom_section');
const a = new SubmitFormWithoutLabel(cstm, 'beforeend', tags);
a.render();