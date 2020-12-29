const FormTags = [
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="name"',
      name: 'name="userName"',
      placeholder: 'placeholder="Ваше Имя"',
    },
  },
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="email"',
      name: 'name="email"',
      placeholder: 'placeholder="Ваш e-mail"',
    },
  },
  {
    name: 'input',
    attributes: {
      selector: 'class="form__input"',
      type: 'type="tel"',
      name: 'name="phone"',
      placeholder: 'placeholder="Ваш телефон"',
    },
  },
  {
    name: 'button',
    content: 'Оставить заявку',
    attributes: {
      selector: 'class="form__button"',
      type: 'type="button"',
    },
  },
]

export default FormTags;
