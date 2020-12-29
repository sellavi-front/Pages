const FormTags = [
  {
    name: 'label',
    content: 'Текст контент вашего тега',
    attributes: {
      selector: 'class="sender-form__input"',
      type: 'type="name"',
      placeholder: 'placeholder="Ваше Имя"',
    },
  },
  {
      name: 'input',
      attributes: {
        selector: 'class="sender-form__input"',
        type: 'type="email"',
        placeholder: 'placeholder="Ваш e-mail"',
      },
    },
  {
    name: 'input',
    attributes: {
      selector: 'class="sender-form__input"',
      type: 'type="tel"',
      placeholder: 'placeholder="Ваш телефон"',
    },
  },
]

export default FormTags;
