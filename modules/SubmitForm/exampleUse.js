// import './utils/tags.js'
import './SubmitForm.js'

// в attributes прописываются аттрибуты для HTML тега

const tags = [
  tag = {
    name: 'label',
    content: 'Текст контент вашего тега',
    attributes: {
      selector: 'class="sender-form__input"',
      type: 'type="name"',
      placeholder: 'placeholder="Ваше Имя"',
    },
  },
  tag = {
      name: 'input',
      attributes: {
        selector: 'class="sender-form__input"',
        type: 'type="name"',
        placeholder: 'placeholder="Ваше Имя"',
      },
    },
  tag = {
    name: 'input',
    attributes: {
      selector: 'class="sender-form__input"',
      type: 'type="number"',
      placeholder: 'placeholder="Ваше Вымя"',
    },
  },
];

const a = new SubmitForm('Название вашего селектора', tags);
a.getForm();
